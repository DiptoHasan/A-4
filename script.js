let currentTab = "all";
const tabActive = ['text-white', 'bg-primary', 'font-semibold'];
const tabInactive = ['text-[#64748B]'];

const allContainer = document.getElementById("allCont");
const interviewContainer = document.getElementById("interviewCont");
const rejectContainer = document.getElementById("rejectCont");

function switchTab(tab){
    
    const tabs = ["all", "interview", "rejected"];

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
    if (tab === "all") {
        allContainer.classList.remove("hidden");
    }
    else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");
    }
    else{
        rejectContainer.classList.remove("hidden");
    }
}

switchTab(currentTab);


