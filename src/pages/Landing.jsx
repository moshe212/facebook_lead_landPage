
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  CheckCircle,
  Filter,
  Globe,
  Key,
  Lock,
  MessageCircle,
  Search,
  Send,
  BarChart,
  Clock,
  UserCheck,
  Users,
  Zap,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Bot,
  Star,
  Palette,
  Sparkles,
  PlayCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const itemFadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Landing() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-100 font-sans" dir="rtl">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 left-0 h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 -z-10 rounded-b-[100px] sm:rounded-b-[120px] md:rounded-b-[150px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
        ></motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.header 
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
          >
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-2 rounded-lg shadow-md">
                <Send className="h-6 w-6" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">facebook-leads</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-gray-700 font-medium hover:text-teal-600 transition-colors">כניסה</Button>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg shadow-teal-500/30 transform hover:scale-105 transition-transform duration-300">
                נסה בחינם
              </Button>
            </div>
          </motion.header>

          <div className="grid lg:grid-cols-2 gap-12 items-center py-10">
            <motion.div 
              className="order-2 lg:order-1"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                variants={itemFadeInUp}
              >
                הלידים הכי חמים – מכל קבוצות הפייסבוק, ישירות אליך
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={itemFadeInUp}
              >
                facebook-leads תביא אליך פוסטים רלוונטיים מכל קבוצות הפייסבוק, גם כאלה שאתה לא חבר בהן.
                קבל אותם לוואטסאפ, למייל או לכל מקום שתבחר, עד 15 דקות מרגע הפרסום.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                variants={itemFadeInUp}
              >
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/40 text-lg px-8 py-6 transform hover:scale-105 transition-transform duration-300">
                  התחל עכשיו – זה בחינם!
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors">
                  <PlayCircle className="ml-2 h-5 w-5" />
                  צפה בהדגמה
                </Button>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2 text-gray-500"
                variants={itemFadeInUp}
              >
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>התחברות בקליק אחד עם גוגל</span>
              </motion.div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4 } }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 rounded-3xl blur-3xl -z-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full">
                      <Bell className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">ליד חדש התקבל!</h3>
                      <p className="text-sm text-gray-500">לפני 2 דקות</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
                    <div className="flex gap-3 mb-2">
                      <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                        className="w-10 h-10 rounded-full object-cover" alt="פרופיל" />
                      <div>
                        <h4 className="font-semibold">אלי כהן</h4>
                        <p className="text-xs text-gray-500">בקבוצה: נדל"ן למכירה - מרכז</p>
                      </div>
                    </div>
                    <p className="text-gray-700">מחפש דירת 4 חדרים באזור רעננה/הרצליה עם מרפסת. תקציב עד 2.5 מיליון. לפנות אלי בפרטי או בטלפון 05x-xxxxxxx</p>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <Button size="sm" variant="outline" className="hover:border-gray-400">סמן כטופל</Button>
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700">פנה עכשיו</Button>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">זמן ממוצע</p>
                    <p className="font-semibold">8 דקות מהפרסום</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">איך <span className="text-teal-600">facebook-leads</span> עובד בשבילך</h2>
          <p className="text-xl text-gray-600">המערכת שלנו סורקת קבוצות פייסבוק, מזהה לידים פוטנציאליים ושולחת אותם ישירות אליך - לפני המתחרים.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              icon: <Globe className="h-8 w-8 text-sky-500" />,
              title: "גישה לכל הקבוצות",
              description: "קבל פוסטים רלוונטיים מכל קבוצות הפייסבוק, גם אם אינך חבר בהן",
              bgColor: "bg-sky-50",
            },
            {
              icon: <Clock className="h-8 w-8 text-purple-500" />,
              title: "מהירות",
              description: "קבל התראות תוך 15 דקות מרגע פרסום הפוסט",
              bgColor: "bg-purple-50",
            },
            {
              icon: <Filter className="h-8 w-8 text-pink-500" />,
              title: "סינון חכם",
              description: "הגדר מילות מפתח וקבל רק את הפוסטים הרלוונטיים עבורך",
              bgColor: "bg-pink-50",
            },
            {
              icon: <Send className="h-8 w-8 text-green-500" />,
              title: "שליחה לכל יעד",
              description: "קבל לידים ישירות לוואטסאפ, מייל, טלגרם או כל פלטפורמה אחרת",
              bgColor: "bg-green-50",
            }
          ].map((feature, index) => (
            <motion.div key={index} variants={itemFadeInUp} whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(0,128,128,0.1)" }} className="h-full">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm h-full">
                <CardContent className="pt-6">
                  <div className={`mb-5 ${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Advanced Features Tabs */}
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 mb-20 border border-gray-100"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">פיצ׳רים מתקדמים <Sparkles className="inline-block h-8 w-8 text-yellow-400" /></h2>
          
          <Tabs defaultValue="search" className="max-w-4xl mx-auto" dir="rtl">
            <TabsList className="grid grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
              <TabsTrigger value="search" className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-teal-600 data-[state=active]:shadow-md rounded-lg transition-all">איתור לידים</TabsTrigger>
              <TabsTrigger value="manage" className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-teal-600 data-[state=active]:shadow-md rounded-lg transition-all">ניהול וארגון</TabsTrigger>
              <TabsTrigger value="ai" className="text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-teal-600 data-[state=active]:shadow-md rounded-lg transition-all">בינה מלאכותית</TabsTrigger>
            </TabsList>
            
            <AnimatePresence mode="wait">
              <TabsContent value="search" className="border-none p-0">
                <motion.div 
                  key="search"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">איתור לידים חכם</h3>
                    <ul className="space-y-4">
                      {[
                        {icon: <Search className="h-5 w-5 text-blue-600" />, title: "סינון לפי מילות מפתח", desc: "הגדר מילות מפתח ספציפיות לתחום שלך כדי לקבל לידים ממוקדים", color: "blue"},
                        {icon: <Key className="h-5 w-5 text-indigo-600" />, title: "חיפוש מתקדם", desc: "שילוב של מילות מפתח, שלילת מילים ומיקומים גיאוגרפיים", color: "indigo"},
                        {icon: <Users className="h-5 w-5 text-purple-600" />, title: "גישה לכל הקבוצות", desc: "קבל גישה לתוכן מקבוצות רלוונטיות גם בלי להיות חבר בהן", color: "purple"},
                      ].map(item => (
                        <li className="flex gap-3" key={item.title}>
                          <div className={`mt-1 bg-${item.color}-100 rounded-full p-1.5 flex-shrink-0`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-2 md:order-1 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">הגדרת חיפוש חדש</h4>
                      <div className="space-y-3">
                        <input 
                          type="text" 
                          placeholder="מילות מפתח (למשל: דירה, נדל״ן, השקעה)" 
                          className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                        />
                        <input 
                          type="text" 
                          placeholder="מילים לסינון (למשל: להשכרה, יד שניה)" 
                          className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                        />
                        <input 
                          type="text" 
                          placeholder="אזורים גיאוגרפיים (למשל: תל אביב, מרכז)" 
                          className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                        />
                        <Button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-md transform hover:scale-105 transition-transform">שמור חיפוש</Button>
                      </div>
                    </div>
                    <div className="text-center text-sm text-gray-500">
                      ניתן להגדיר כמה חיפושים במקביל ולקבל התראות נפרדות
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="manage" className="border-none p-0">
                 <motion.div 
                  key="manage"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">ניהול וארגון הלידים</h3>
                    <ul className="space-y-4">
                    {[
                        {icon: <MessageCircle className="h-5 w-5 text-pink-600" />, title: "תגובות אוטומטיות", desc: "הגדר תבניות תגובה מותאמות אישית שיישלחו אוטומטית ללידים פוטנציאליים", color: "pink"},
                        {icon: <BarChart className="h-5 w-5 text-orange-600" />, title: "סטטיסטיקות ודו״חות", desc: "עקוב אחר ביצועי הלידים, תגובות ואחוזי המרה בדשבורד אינטואיטיבי", color: "orange"},
                        {icon: <UserCheck className="h-5 w-5 text-green-600" />, title: "ניהול סטטוס לידים", desc: "תייג, סמן ועקוב אחר התקדמות הלידים - מרגע הקבלה ועד סגירת העסקה", color: "green"},
                      ].map(item => (
                        <li className="flex gap-3" key={item.title}>
                          <div className={`mt-1 bg-${item.color}-100 rounded-full p-1.5 flex-shrink-0`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-2 md:order-1 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <div className="bg-white rounded-xl shadow-sm p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium text-gray-900">דשבורד לידים אחרונים</h4>
                        <span className="text-sm text-teal-600 hover:underline cursor-pointer">צפה בכל הלידים</span>
                      </div>
                      
                      {[
                        { name: "דני לוי", desc: "מחפש דירת 3 חדרים בתל אביב", status: "חדש", time: "לפני 7 דק׳" },
                        { name: "רונית כהן", desc: "דרוש יועץ משכנתאות מנוסה", status: "בטיפול", time: "לפני 35 דק׳" },
                        { name: "יעל אביב", desc: "מעוניינת לקנות רכב יד שניה עד 80 אלף", status: "נסגר", time: "לפני שעתיים" }
                      ].map((lead, i) => (
                        <motion.div 
                          key={i} 
                          className="border-b border-gray-100 last:border-none py-3"
                          initial={{ opacity: 0, x:10 }}
                          animate={{ opacity: 1, x:0, transition: { delay: i * 0.1} }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{lead.name}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              lead.status === "חדש" ? "bg-green-100 text-green-700" : 
                              lead.status === "בטיפול" ? "bg-yellow-100 text-yellow-700" : 
                              "bg-blue-100 text-blue-700"
                            }`}>
                              {lead.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{lead.desc}</p>
                          <p className="text-xs text-gray-400">{lead.time}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="ai" className="border-none p-0">
                 <motion.div 
                  key="ai"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">בינה מלאכותית מתקדמת</h3>
                    <div className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs px-3 py-1 rounded-full mb-6 shadow-md">
                      בקרוב!
                    </div>
                    <ul className="space-y-4">
                     {[
                        {icon: <Bot className="h-5 w-5 text-red-600" />, title: "זיהוי לידים אוטומטי", desc: "AI מתקדם שמזהה לידים פוטנציאליים גם בלי מילות מפתח מוגדרות", color: "red"},
                        {icon: <Zap className="h-5 w-5 text-yellow-600" />, title: "תגובות מותאמות אישית", desc: "מערכת AI שיוצרת תגובות אישיות ואפקטיביות לכל ליד בהתאם לתוכן הפוסט", color: "yellow"},
                        {icon: <BarChart className="h-5 w-5 text-lime-600" />, title: "ניתוח וחיזוי", desc: "חיזוי איכות הלידים וניתוח סיכויי המרה בהתבסס על ניסיון קודם", color: "lime"},
                      ].map(item => (
                        <li className="flex gap-3" key={item.title}>
                          <div className={`mt-1 bg-${item.color}-100 rounded-full p-1.5 flex-shrink-0`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.title}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-2 md:order-1 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-indigo-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-10 transform translate-x-20 -translate-y-20"></div>
                    
                    <div className="bg-white rounded-xl shadow-sm p-5 mb-4 relative">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">ניתוח AI</h4>
                          <p className="text-sm text-gray-500 mt-1">הבינה המלאכותית זיהתה ליד פוטנציאלי:</p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 rounded-lg p-4 mb-3 border border-slate-200">
                        <p className="text-gray-700 text-sm">״היי חברים, אני מחפש דירת 3 חדרים להשקעה באזור המרכז, רצוי פתח תקווה או סביבה. מישהו יכול להמליץ על אזורים טובים להשקעה? תודה!״</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">סבירות לליד איכותי:</span>
                          <span className="font-semibold text-green-600">87%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">דחיפות:</span>
                          <span className="font-semibold text-amber-600">בינונית</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">סיווג:</span>
                          <span className="font-semibold">נדל״ן - השקעה</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md transform hover:scale-105 transition-transform">הירשם לרשימת ההמתנה</Button>
                  </div>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="bg-gradient-to-br from-slate-100 to-sky-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-gray-900"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >לקוחות מספרים <Star className="inline-block text-yellow-400 h-8 w-8 mb-1" /></motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                quote: "השירות הזה שינה לגמרי את העסק שלי. אני מקבל לידים איכותיים מקבוצות שאפילו לא ידעתי שקיימות.",
                name: "יוסי לוי",
                title: "יועץ נדל״ן",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              },
              {
                quote: "בזכות facebook-leads הצלחתי להגיע ללקוחות לפני המתחרים. המערכת חוסכת לי שעות של חיפוש ידני בקבוצות.",
                name: "מיכל כהן",
                title: "סוכנת ביטוח",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              },
              {
                quote: "התוצאות מדהימות. תוך חודש אחד הגדלתי את מספר העסקאות שלי ב-60% רק מהלידים שקיבלתי מהמערכת.",
                name: "איתי גולן",
                title: "יזם נדל״ן",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemFadeInUp} className="h-full">
                <Card className="border-none shadow-lg bg-white h-full transform hover:scale-105 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6 flex-grow">
                      <div className="flex gap-1 mb-4">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-gray-900"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >שאלות נפוצות</motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {[
            {
              question: "איך המערכת מצליחה להביא פוסטים מקבוצות שאיני חבר בהן?",
              answer: "המערכת משתמשת בטכנולוגיה מתקדמת לסריקת קבוצות פייסבוק ציבוריות וסגורות, ומזהה פוסטים רלוונטיים לפי מילות מפתח שהגדרת. אנחנו מכבדים את מדיניות הפרטיות של פייסבוק ומתמקדים רק בתוכן שזמין לציבור."
            },
            {
              question: "כמה זמן לוקח מרגע פרסום הפוסט ועד קבלת ההתראה?",
              answer: "המערכת סורקת קבוצות בזמן אמת ושולחת התראות בממוצע תוך 8-15 דקות מרגע פרסום הפוסט. זמן התגובה המהיר מאפשר לך להיות בין הראשונים שמגיבים ללידים פוטנציאליים."
            },
            {
              question: "האם ניתן להגדיר סינון לפי אזורים גיאוגרפיים?",
              answer: "בהחלט! המערכת מאפשרת לך להגדיר סינון לפי מילות מפתח הקשורות לאזורים גיאוגרפיים. בקרוב נשיק גם פיצ'ר זיהוי מיקום אוטומטי באמצעות בינה מלאכותית."
            },
            {
              question: "האם השירות באמת חינמי?",
              answer: "אנחנו מציעים גרסה חינמית שמאפשרת לך לקבל עד 20 לידים בחודש מקבוצות מוגבלות. למשתמשים עסקיים אנו מציעים חבילות פרימיום החל מ-99 ש״ח לחודש, עם גישה בלתי מוגבלת לכל הקבוצות וכל הפיצ'רים המתקדמים."
            }
          ].map((faq, index) => (
            <motion.div 
              key={index} 
              className="border-b border-gray-200 last:border-none py-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.1 }}
              variants={itemFadeInUp}
            >
              <button 
                className="flex justify-between items-center w-full text-right hover:bg-slate-50 p-2 rounded-md transition-colors"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown className={`h-6 w-6 text-teal-500 transform transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {expanded === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } }}
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } }}
                    className="mt-4 text-gray-600 pr-6 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 py-20 mb-0">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">מוכנים להתחיל לקבל לידים איכותיים?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            קבל שליטה מלאה על הלידים שלך – בכל תחום, מכל קבוצה, בלי לפספס אף לקוח פוטנציאלי.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-slate-100 shadow-2xl shadow-cyan-700/30 text-lg px-8 py-3 transform hover:scale-105 transition-transform duration-300"
          >
            התחל עכשיו – זה בחינם!
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-2 rounded-lg">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white">facebook-leads</h3>
              </div>
              <p className="text-slate-400">
                המערכת המובילה לאיסוף לידים מקבוצות פייסבוק בזמן אמת.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">המוצר</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400 transition-colors">תכונות</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">מחירים</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">שותפים</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">אבטחה</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">תמיכה</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-400 transition-colors">מדריכים</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">שאלות ותשובות</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">צור קשר</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">קהילה</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-white">עקבו אחרינו</h3>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-teal-500 text-white transition-colors"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* Placeholder for actual icons if available */}
                    <Palette className="w-5 h-5" /> 
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">© 2024 facebook-leads. כל הזכויות שמורות.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">תנאי שימוש</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">מדיניות פרטיות</a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">עוגיות</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
