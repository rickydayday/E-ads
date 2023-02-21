import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getDatabase, ref, push ,set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";
import { signOut ,getAuth} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAVvKAD_0EtH4cGKAu1WodaEY5g6TgFXBo",
  authDomain: "creditbank-d05fd.firebaseapp.com",
  databaseURL: "https://creditbank-d05fd-default-rtdb.firebaseio.com",
  projectId: "creditbank-d05fd",
  storageBucket: "creditbank-d05fd.appspot.com",
  messagingSenderId: "962739966741",
  appId: "1:962739966741:web:9ffbdfff756eff16060f1c",
  measurementId: "G-VZHXWF4G1F"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);


const db = getDatabase(app);
const auth = getAuth(app);
var send = document.getElementById('send');
const postListFeedbacks = ref(db, 'campaigns');

const newPostFeedbacks = push(postListFeedbacks);


//post data to database
send.addEventListener('click',(e)=>{



e.preventDefault();

var campaign_name = document.getElementById('campaign_name').value;
var campaign_type  = document.getElementById('campaign_type').value;
var traffic_type = document.getElementById('traffic_type').value;
var CPA = document.getElementById('pricing_model1').value;
var CPM = document.getElementById('pricing_model2').value;
var smartCPM = document.getElementById('pricing_model3').value;
var target_url = document.getElementById('target_url').value;
var target_country = document.getElementById('target_country').value;
var target_budget = document.getElementById('target_budget').value;
var target_platform = document.getElementById('target_platform').value;
var target_os = document.getElementById('target_os').value;
var target_device = document.getElementById('target_device').value;
var target_device_type = document.getElementById('target_device_type').value;
var mobile_ISP = document.getElementById('mobile_isp').value;


//keywords
var target_automobile = document.getElementById('automobile');
var target_insurance = document.getElementById('insurance');
var target_beauty = document.getElementById('beauty');
var target_electronics = document.getElementById('electronics');
var target_fitness = document.getElementById('fitness');
var target_fashion = document.getElementById('fashion');
var target_homegarden = document.getElementById('homegarden');
var target_internet = document.getElementById('internet');




set(newPostFeedbacks, {
CampaignName : campaign_name,
CampaignType : campaign_type,
TrafficType:  traffic_type,

TargetUrl : target_url,
TargetCountry: target_country,
KeywordAutomobile: target_automobile,
KeywordInsurance: target_insurance,
KeywordBeauty: target_beauty,
KeywordElectronics: target_electronics,
KeywordFitness: target_fitness,
KeywordFashion: target_fashion,
TargetBudget : target_budget,
TargetPlatform: target_platform,
TargetOs : target_os,
TargetDevice : target_device,
TargetDeviceType :target_device_type,
MobileIsp : mobile_ISP,
CPA:CPA,
CPM:CPM,
smartCPM:smartCPM


})



.then(() => {

swal({
title: "Thank You!",
text: "Your Campaign Is Successfully Created",
icon: "success",
button: "Okay",
});


})
.catch((error)=>{

swal({
title: "Sorry!",
text: "Your Campaign Is Not Created",
icon: "info",
button: "Okay",
});

})

});





//logout
var logout = document.getElementById('logout');

logout.addEventListener('click',Logout);

function Logout(){

     signOut(auth).then(() => {


      swal({
            title: "Bye Bye!",
            text: "Your Have Logged Out Successfully",
            icon: "success",
            timer: 3000,
            button: "Okay",
})

.then(() => {
  window.location.href="/";
})

}).catch((error) => {
  // An error happened.
});


}


