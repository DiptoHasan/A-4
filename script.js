let currentTab = "all";
const tabActive = ['text-white', 'bg-primary', 'font-semibold'];
const tabInactive = ['text-[#64748B]'];

const allContainer = document.getElementById("allCont");
const interviewContainer = document.getElementById("interviewCont");
const rejectContainer = document.getElementById("rejectCont");

function switchTab(tab){
    
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    for (const t of tabs) {
        const tabName = document.getElementById("tab-"+ t);
        if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }
    const pages = [allContainer, interviewContainer, rejectContainer];

    for (const section of pages) {
        section.classList.add("hidden")
    }

    emptyState.classList.add("hidden");

    if (tab === "all") {
        allContainer.classList.remove("hidden");
        if (allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
            emptyState.classList.add("flex");
        }
    }
    else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");
         if (interviewContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
            emptyState.classList.add("flex");
        }
    }
    else {
        rejectContainer.classList.remove("hidden");
         if (rejectContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
            emptyState.classList.add("flex");
        }
    }
    updateStat();
}

// Stat Update
const totalStat = document.getElementById("stat-total");
const interviewStat = document.getElementById("stat-interview");
const rejectStat = document.getElementById("stat-reject");

totalStat.innerText = allContainer.children.length;
interviewStat.innerText = interviewContainer.children.length;
rejectStat.innerText = rejectContainer.children.length;
const availableStat = document.getElementById("available");

switchTab(currentTab);


document.getElementById("jobsCont").addEventListener("click",function(event){
const clickedEl = event.target;
const card = clickedEl.closest(".bg-white");
const status = card.querySelector(".statu");

if(clickedEl.classList.contains("interview")){
    status.innerText = "Interviewed"
    interviewContainer.appendChild(card);
    updateStat();

}
if(clickedEl.classList.contains("reject")){
    status.innerText = "Rejected"
    rejectContainer.appendChild(card);
    updateStat();
}
if(clickedEl.classList.contains("del")){
card.remove();
updateStat();
}
    
})

function updateStat(){

const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectContainer.children.length,
};
    totalStat.innerText =counts.all;
    interviewStat.innerText = counts.interview;
    rejectStat.innerText = counts.rejected;

    availableStat.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        emptyState.classList.remove("hidden");
        emptyState.classList.add("flex");
    }
    else{
        emptyState.classList.add("hidden");
        emptyState.classList.remove("flex");
    }
}

updateStat();