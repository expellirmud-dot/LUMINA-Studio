export const contactConfig = {
  eyebrow: "Contact",
  heading: "เริ่มจากเล่าให้ฟังก่อนได้ว่างานเป็นแบบไหน.",
  copy: "ไม่ต้องมีแพ็กเกจในใจก็ได้ แค่บอกวัน เวลา สถานที่ และสิ่งที่อยากเก็บไว้ แล้วค่อยคุยกันอย่างเป็นธรรมชาติ.",
  items: [
    {
      label: "Phone",
      value: "0649861939",
      href: "tel:0649861939",
    },
    {
      label: "LINE",
      value: "expellirmud",
      href: "https://line.me/ti/p/~expellirmud",
    },
    {
      label: "Facebook",
      value: "Exstreet",
      href: "https://www.facebook.com/Exstreet",
    },
  ],
};

export type InquiryOption = {
  id: string;
  label: string;
  defaultMessage: string;
};

export const inquiryOptionsConfig: InquiryOption[] = [
  {
    id: "family",
    label: "บันทึกช่วงเวลาครอบครัว",
    defaultMessage: "สวัสดีครับ สนใจอยากปรึกษาเรื่องการบันทึกภาพช่วงเวลาครอบครัวครับ",
  },
  {
    id: "ceremony",
    label: "งานแต่งงานหรือพิธีสำคัญ",
    defaultMessage: "สวัสดีครับ สนใจอยากปรึกษาเรื่องการบันทึกภาพงานแต่งงานหรือพิธีการครับ",
  },
  {
    id: "portrait",
    label: "ภาพบุคคลและเรื่องราวเฉพาะ",
    defaultMessage: "สวัสดีครับ สนใจอยากปรึกษาเรื่องการถ่ายภาพบุคคลและเรื่องราวเฉพาะครับ",
  },
];
