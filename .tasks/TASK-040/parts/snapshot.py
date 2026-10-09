"""TASK-040: preserve dirty worktree bytes + hashes before any reconciliation."""
from pathlib import Path
import hashlib, json, shutil, subprocess
from datetime import datetime, timezone
SRC=Path(r"D:\lumina-studio")
DST=Path(r"D:\project_backups\lumina-studio\TASK-040-pre-main-ff-20261009-2006")
def git(*a): return subprocess.run(["git","-C",str(SRC),*a],capture_output=True,check=True).stdout
def digest(p):
 h=hashlib.sha256()
 with p.open("rb") as f:
  for chunk in iter(lambda:f.read(1024*1024),b""): h.update(chunk)
 return h.hexdigest()
def main():
 assert not DST.exists(),"Backup exists; must not overwrite it"
 head=git("rev-parse","HEAD").decode().strip()
 branch=git("branch","--show-current").decode().strip()
 assert head=="eba90db8e64016aa6ea1ef104ebe2194c668685d" and branch=="main","Baseline changed"
 raw=git("-c","core.quotepath=false","status","--porcelain=v1","-z","--untracked-files=all").split(b"\x00")
 assert raw[-1]==b""
 rows=[];i=0
 while i<len(raw)-1:
  item=raw[i];assert len(item)>3 and item[2]==32
  xy=item[:2].decode("ascii");name=item[3:].decode("utf-8","surrogateescape")
  rows.append((xy,name))
  if xy[0] in "RC" or xy[1] in "RC": i+=1
  i+=1
 assert 1650<=len(rows)<=1850,"Unexpected changed file count: "+str(len(rows))
 DST.mkdir(parents=True)
 files=DST/"files";manifest=[]
 for xy,name in rows:
  path=(SRC/name).resolve()
  assert path==SRC or SRC in path.parents,"Unsafe path: "+name
  if path.is_file():
   dest=files/name;dest.parent.mkdir(parents=True,exist_ok=True)
   shutil.copy2(path,dest)
   hashed=digest(path)
   assert digest(dest)==hashed,"Copy mismatch: "+name
   manifest.append(dict(status=xy,path=name,present=True,size=path.stat().st_size,sha256=hashed))
  else:
   assert "D" in xy,"Unexpected missing item: "+name
   manifest.append(dict(status=xy,path=name,present=False))
 (DST/"working-diff.patch").write_bytes(git("diff","--binary","HEAD"))
 (DST/"index-diff.patch").write_bytes(git("diff","--cached","--binary","HEAD"))
 (DST/"manifest.json").write_text(json.dumps(dict(task="TASK-040",date=datetime.now(timezone.utc).isoformat(),head=head,branch=branch,manifest=manifest),ensure_ascii=False,indent=2),encoding="utf-8")
 for a in manifest:
  if a["present"]: assert digest(files/a["path"])==a["sha256"],"Hash verification failed: "+a["path"]
 copied=sum(x["present"] for x in manifest)
 deleted=len(manifest)-copied
 (DST/"VERIFIED.txt").write_text(f"TASK-040 VERIFIED\nhead={head}\nitems={len(manifest)}\ncopied={copied}\nmissing_deletions={deleted}\n",encoding="utf-8")
 print(json.dumps(dict(verified=True,backup=str(DST),head=head,entries=len(manifest),copied=copied,deleted=deleted,bytes=sum(x.get("size",0) for x in manifest))))
if __name__=="__main__":main()
