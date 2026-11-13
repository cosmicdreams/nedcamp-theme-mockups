// Sample content: the real NEDCamp 2026 Saturday agenda, used to stress-test layouts for 2027.
const ROOMS = ["Auditorium","203","202","201","204"];
const TRACK_NAMES = {fe:"Front-end",be:"Back-end",ai:"AI and automation",hu:"Being human",ux:"UX and design",pm:"Project management",ops:"DevOps",a11y:"Accessibility"};
const SLOTS = [
 {start:"8:00",end:"8:30",all:{title:"Registration and breakfast",where:"Gaige Hall lobby and 200"}},
 {start:"8:30",end:"8:45",all:{title:"Opening remarks",where:"Auditorium"}},
 {start:"9:00",end:"9:45",talks:[
  {room:"203",title:"Introduction to Drupal LMS",who:"Mark Felton",org:"Tag1",tracks:["be","hu"],lvl:"All"},
  {room:"202",title:"You Don't Need JS for That",who:"Aubrey Sambor",org:"",tracks:["fe"],lvl:"All"},
  {room:"201",title:"Nothing Major Broke This Year. Now, Go Defend Your Budget.",who:"Fredric Mitchell",org:"Bright Plum",tracks:["a11y","pm"],lvl:"All"},
  {room:"204",title:"Every Day Is Judgment Day",who:"Amber Matz",org:"Tugboat",tracks:["ai","hu"],lvl:"All"}]},
 {start:"10:00",end:"10:45",talks:[
  {room:"203",title:"Making Drupal Consumer-Friendly: Win More Clients with Modern Hosting",who:"Ashraf Abed",org:"Drupito",tracks:["ops","pm"],lvl:"All"},
  {room:"202",title:"Content Modeling for Useful Components",who:"Marissa (Mars) Epstein",org:"Mars Digital",tracks:["be","ux"],lvl:"All"},
  {room:"201",title:"Why Isn't This Done Yet? Matching Your Leadership to the Task",who:"Gena Dellett",org:"Skvare",tracks:["hu"],lvl:"All"},
  {room:"204",title:"AI Ate My Work, and I'm Okay with That",who:"Jacob Rockowitz",org:"The Big Blue House",tracks:["ai","hu"],lvl:"All"}]},
 {start:"11:00",end:"11:45",talks:[
  {room:"Auditorium",title:"Passing the Drupal Torch: Will the Next Generation Take It?",who:"Thomas and Olivia Scola",org:"Bluefly.io, Acquia",tracks:["hu"],lvl:"All"},
  {room:"203",title:"Beyond Decoupled: Drupal Canvas, Astro and Cloudflare at Scale",who:"Nathan Dentzau, Josh Fabean",org:"Blue Drop Labs",tracks:["fe"],lvl:"Intermediate"},
  {room:"202",title:"The Future of Drupal in Just Five Words",who:"John Money",org:"Acquia",tracks:["ai"],lvl:"Intermediate"},
  {room:"201",title:"De-shittification: What Error Messages Are Actually Telling Us",who:"Kit Miklik",org:"State of Maryland",tracks:["be","fe"],lvl:"All"},
  {room:"204",title:"Drupal AI Modules Worth Knowing About",who:"Michael Anello",org:"DrupalEasy",tracks:["ai"],lvl:"All"}]},
 {start:"12:00",end:"1:00",all:{title:"Lunch",where:"Faculty Center"}},
 {start:"1:15",end:"2:15",keynote:{title:"The Work We Want",who:"Ethan Marcotte",org:"Designer, writer and speaker",room:"Auditorium"}},
 {start:"2:15",end:"2:45",all:{title:"Group photo, then coffee",where:"Auditorium, then Gaige 200"}},
 {start:"3:00",end:"3:45",talks:[
  {room:"203",title:"Stop Guessing: Lightweight User Research for Teams",who:"Kyle Soucy",org:"Usable Interface",tracks:["ux"],lvl:"All"},
  {room:"202",title:"The Great Hook Migration: Getting Down with OOP",who:"JD Flynn",org:"",tracks:["be"],lvl:"Intermediate"},
  {room:"201",title:"Why Your Website Redesign Isn't Enough: The Case for Web Governance",who:"Rachel Wilken",org:"Indiana University",tracks:["pm","ux"],lvl:"All"},
  {room:"204",title:"Trusted AI: Guardrails, Governance, and Proof Your Team Still Owns the Work",who:"Jim Birch",org:"Kanopi",tracks:["ai"],lvl:"Intermediate"}]},
 {start:"4:00",end:"4:45",talks:[
  {room:"203",title:"Overnight Website Challenge: How Drupal Spent 10 Years Making the Perfect Rapid Development Kit",who:"Chris Weber",org:"Velir",tracks:["ai","hu"],lvl:"All"},
  {room:"202",title:"When Nobody Notices: Addiction in the Tech Community",who:"Stephen Cross",org:"Talking Drupal",tracks:["hu"],lvl:"All"},
  {room:"201",title:"I Built My First Drupal Site Template, and You Can Too",who:"Martin Anderson-Clutz",org:"Acquia",tracks:["be","fe"],lvl:"Intermediate"},
  {room:"204",title:"Fun with Canvas Code Components",who:"Brian Perry",org:"Actual AI",tracks:["fe"],lvl:"Intermediate"}]},
 {start:"5:00",end:"7:00",all:{title:"After party",where:"Gaige Hall 200"}}
];
// Demo clock: pretend it is Saturday 10:20 AM so "now" states are visible.
const DEMO_NOW = "10:20";
function mins(t){let [h,m]=t.split(":").map(Number); if(h<8)h+=12; return h*60+m;}
function slotState(s){const n=mins(DEMO_NOW); if(n>=mins(s.end))return "past"; if(n>=mins(s.start))return "now"; return "next";}
