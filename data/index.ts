import {
  ShieldCheck,
  Target,
  Clock,
  Lightbulb,
  Users,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export const academicQualifications = [
  {
    degree: "ليسانس الحقوق",
    institution: "كلية الحقوق – جامعة أسيوط",
    year: "2007",
    grade: "جيد",
  },
  {
    degree: "دبلوم القانون الخاص",
    institution: "جامعة القاهرة",
    year: "2012",
    grade: "جيد",
  },
  {
    degree: "ماجستير القانون المدني",
    institution: "جامعة القاهرة",
    year: "",
    grade: "جيد جداً",
    thesis: "مسؤولية المحامي عن إفشاء أسرار العملاء",
  },
  {
    degree: "دكتوراه القانون المدني",
    institution: "جامعة القاهرة",
    year: "",
    grade: "جيد جداً",
    thesis: "شرط الاحتفاظ بالملكية في البيوع العقارية",
  },
];

export const experiences = [
  { role: "محامٍ مقيد بالاستئناف العالي ومجلس الدولة", period: "منذ 2007" },
  { role: "مركز آرتك للبحوث والدراسات", period: "2008 – 2010" },
  {
    role: "مستشار قانوني – الشركة المصرية للخدمات الهاتفية",
    period: "2010 – 2015",
  },
  { role: "مؤسسة المتخصصون للاستشارات القانونية", period: "2015 – 2016" },
  { role: "مكتب أ.د. جابر جاد نصار", period: "2016 – 2018" },
  { role: "مؤسسة التويجري للمحاماة (مصر والكويت)", period: "2018 – 2023" },
  { role: "شركة مشاري العصيمي للمحاماة", period: "2023 – 2025" },
];

export const egyptClients = [
  "شركة كايرو ستار للسياحة",
  "شركة الواحة للاستثمار العقاري",
  "شركة فا ماك للاستثمار العقاري",
  "شركة المنصورة للراتنجات",
];

export const kuwaitClients = [
  "بنك برقان",
  "بنك الكويت الوطني",
  "شركة أوريدو للاتصالات",
  "مؤسسة الكويت للتقدم العلمي",
  "شركة سيتي هايبر ماركت",
  "شركة المركز العلمي",
  "شركة أنظمة البناء للمقاولات",
];

export const publications = [
  "مسؤولية المحامي عن إفشاء أسرار العملاء",
  "شرط الاحتفاظ بالملكية في البيوع العقارية",
  "التوفيق كوسيلة لتسوية المنازعات",
  "الوساطة كوسيلة لتسوية المنازعات",
  "الحق في الحبس (دراسة مقارنة)",
  "الصورية في القانون",
];

export const certifications = [
  "الرخصة الدولية لقيادة الحاسب الآلي (ICDL)",
  "دورة اللغة الإنجليزية (TOEFL)",
  "دورة أساسيات الكتابة العلمية",
  "دراسات بالمركز الثقافي الفرنسي بالقاهرة",
  "دورة الويبو في الملكية الفكرية",
];

export const skills = [
  "إعداد المذكرات القانونية والدعاوى والطعون",
  "إجراء الأبحاث القانونية المتخصصة",
  "تسوية النزاعات بالوساطة والتوفيق",
  "التفاوض القانوني الاحترافي",
  "التعامل مع الجهات الحكومية والعملاء",
  "العمل تحت ضغط وضمن فريق",
];

export const visionPillars = [
  { icon: ShieldCheck, text: "الاحترافية في تقديم الخدمات القانونية" },
  { icon: Target, text: "الشفافية في التعامل مع العملاء" },
  { icon: Clock, text: "السرعة والدقة في إنجاز الأعمال" },
  { icon: Lightbulb, text: "تقديم حلول قانونية مبتكرة" },
  { icon: Users, text: "بناء علاقات طويلة الأمد مع العملاء" },
];

export const contactInfo = [
  {
    icon: MapPin,
    label: "العنوان",
    value: "الطالبية – فيصل – الجيزة",
    href: "https://maps.google.com/?q=الطالبية+فيصل+الجيزة",
    tag: null,
  },
  {
    icon: Phone,
    label: "الهاتف",
    value: "+965 6519 9404",
    href: "tel:+96565199404",
    tag: "الكويت",
  },
  {
    icon: Phone,
    label: "الهاتف",
    value: "+20 155 060 1700",
    href: "tel:+201550601700",
    tag: "مصر",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "tarfawymohamed614@gmail.com",
    href: "mailto:tarfawymohamed614@gmail.com",
    tag: null,
  },
];

export const socialLinks = [
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/TarfawyLawConsulting",
    color: "#1877F2",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/mohamed_tarfawy_",
    color: "#E4405F",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-tarfawy-525972332",
    color: "#0A66C2",
  },
];

export const WHATSAPP_NUMBER = "96565199404";

export const serviceOptions = [
  "استشارة قانونية",
  "خدمات الشركات",
  "التقاضي والتمثيل القانوني",
  "حل النزاعات بالوسائل البديلة",
  "الخدمات العقارية",
  "الملكية الفكرية",
  "الخدمات الضريبية",
  "أخرى",
];
