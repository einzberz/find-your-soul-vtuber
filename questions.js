const questions = [
    {
        question: "คุณชอบใช้เวลาว่างของคุณทำอะไร?",
        answers: [
            { text: "นั่งพักผ่อนและดูสตรีม" },
            { text: "สร้างคอนเทนต์และมีความเคลื่อนไหว" },
            { text: "เรียนรู้ทักษะใหม่ๆ" },
            { text: "ออกไปข้างนอกกับเพื่อนๆ" }
        ]
    },
    {
        question: "คอนเทนต์การสตรีมที่คุณชอบที่สุดคืออะไร?",
        answers: [
            { text: "การเล่นเกมสบายๆ และการพูดคุย" },
            { text: "ดนตรีและการแสดง" },
            { text: "เนื้อหาการศึกษา" },
            { text: "ความบันเทิงที่มีพลังสูง" }
        ]
    },
    {
        question: "คำไหนที่อธิบายบุคลิกของคุณได้ดีที่สุด?",
        answers: [
            { text: "สบายๆ และง่ายๆ" },
            { text: "กระตือรือร้นและเต็มไปด้วยพลัง" },
            { text: "อยากรู้อยากเห็นและคิดลึก" },
            { text: "มีความคิดสร้างสรรค์และแสดงออก" }
        ]
    },
    {
        question: "ถ้าคุณเลือกสัตว์เลี้ยงได้ คุณจะเลือกแบบไหน?",
        answers: [
            { text: "แมวที่ขี้เกียจนั่งอยู่ข้างๆ" },
            { text: "ลูกสุนัขที่เล่นและมีพลังเต็มที่" },
            { text: "สัตว์แปลกๆ ที่ไม่เหมือนใคร" },
            { text: "นกที่ร้องเพลงได้อย่างไพเราะ" }
        ]
    },
    {
        question: "คุณทำอย่างไรเมื่อรู้สึกเหนื่อย?",
        answers: [
            { text: "งีบหลับและพักผ่อน" },
            { text: "ฝืนทำต่อด้วยพลัง" },
            { text: "นั่งคิดและสะท้อนตัวเอง" },
            { text: "เล่นเพลงเพื่อให้มีแรง" }
        ]
    },
    {
        question: "วันหยุดที่คุณชอบที่สุดคือแบบไหน?",
        answers: [
            { text: "การไปพักผ่อนที่บ้านอย่างเงียบสงบ" },
            { text: "เทศกาลใหญ่ที่มีกิจกรรมมากมาย!" },
            { text: "การไปเที่ยวสถานที่ที่เงียบสงบและลึกลับ" },
            { text: "คอนเสิร์ตหรืองานเทศกาลดนตรี" }
        ]
    },
    {
        question: "เมื่อเกิดเหตุการณ์ที่ไม่คาดคิดขึ้น คุณจะทำอย่างไร?",
        answers: [
            { text: "ยังคงสงบและไหลไปตามสถานการณ์" },
            { text: "แสดงออกอย่างมาก!" },
            { text: "วิเคราะห์สถานการณ์อย่างรอบคอบ" },
            { text: "ทำการล้อเล่นหรือร้องเพลงเกี่ยวกับมัน" }
        ]
    },
    {
        question: "อีโมจิไหนที่แทนคุณได้ดีที่สุด?",
        answers: [
            { text: "😌" },
            { text: "🔥" },
            { text: "🕵️" },
            { text: "🎶" }
        ]
    },
    {
        question: "ถ้าคุณมีพลังพิเศษ คุณจะเลือกอะไร?",
        answers: [
            { text: "พลังในการทำให้คนอื่นรู้สึกผ่อนคลาย" },
            { text: "ความเร็วและพลังสุดยอด!" },
            { text: "พลังในการค้นหาความจริงที่ซ่อนอยู่" },
            { text: "พลังในการสร้างแรงบันดาลใจผ่านดนตรี" }
        ]
    },
    {
        question: "คุณมีปฏิกิริยาอย่างไรเมื่อได้รับของขวัญ?",
        answers: [
            { text: "ยิ้มและพูดขอบคุณ" },
            { text: "ตื่นเต้นสุดๆ!" },
            { text: "รู้สึกสงสัยว่าทำไมถึงได้รับมัน" },
            { text: "ร้องเพลงขอบคุณเล็กน้อย" }
        ]
    }
];


const personalities = {
    chill: {
        type: "Relaxed Akizalica",
        description: "You match with the laid-back, comfy version of Akizalica who enjoys peaceful streams and casual conversations!",
        image: "images/aki_LNY_cat.png"
    },
    energetic: {
        type: "Energetic Akizalica",
        description: "You match with the high-energy, enthusiastic version of Akizalica who brings excitement to every stream!",
        image: "images/aki_angry.png"
    },
    mysterious: {
        type: "Mysterious Akizalica",
        description: "You match with the enigmatic version of Akizalica who keeps viewers intrigued with deeper content!",
        image: "images/aki_smug.png"
    },
    musical: {
        type: "Musical Akizalica",
        description: "You match with the melodious version of Akizalica who expresses herself through music and performance!",
        image: "images/aki_mongraia.gif"
    },
    smug: {
        type: "Smug Akizalica",
        description: "You have a playful, confident side, always ready with a witty comment or a knowing smile.",
        image: "images/aki_cat_smile.png"
    },
    sleepy: {
        type: "Sleepy Akizalica",
        description: "You love to relax and take things slow. A cozy blanket and a warm drink are your best friends.",
        image: "images/aki_want_to_sleep.png"
    },
    reward: {
        type: "Festive Akizalica",
        description: "You bring joy and celebration wherever you go! Whether it's Christmas or any holiday, you're ready to party!",
        image: "images/aki_chirstmas_gift.png"
    },
    loading: {
        type: "Chaotic Akizalica",
        description: "Your energy is unpredictable, and no one ever knows what to expect from you—including yourself!",
        image: "images/aki_loading.png"
    }
};

