# Backend Entry Task

**Name:** Haneen Essam

---

### Questions & Answers

**1. What do async and await actually do in importFromApi? What is your code waiting for, and what else could happen while it waits?**
* حسب فهمي كلمة `async` بتعرف الجافاسكريبت إن الدالة جواها عمليات بتاخد وقت .
* `await` بتخلي الكود يستنى  وصول البيانات من ال API قبل ما يروح للسطر اللي بعده ، في الوقت ده البرنامج بيشتغل على باقي المهام عادي.

**2. Why should list() not hand back the store's internal array directly? What could go wrong if it did?**
* لو الدالة رجعت المصفوفة الأصلية على طول أي كود بره الكلاس يقدر يغير في البيانات أو يمسح منها بدون ما يعدي على شروط وقواعد الفحص الخاصة بالكلاس.
* عشان نحمي البيانات الداخلية بنرجع نسخة جديدة باستخدام الـ Spread Operator `[...]`.

**3. Which part of this task was hardest, and how did you work through it? Say honestly what you did not finish.**
* الجزء الأصعب كان `importFromApi` عشان مذاكرتهاش قبل كدا فمعرفتش اعملها و مكانش عندي وقت غير اني اذاكر syntax js عشان اقدر اعمل باقي التاسك.
