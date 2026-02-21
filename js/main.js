
let username = document.getElementById("github-username")
let searchBtn = document.querySelector(".search-btn")
let searchCard = document.querySelector(".search-card")
let notFoundCard = document.getElementById("not-found-card")
let resultArea = document.getElementById("result-area")

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let apiUrl = `https://api.github.com/users/${username.value}`
    fetch(apiUrl)
    .then(response=>response.json())
    .then(res=>{
    
        if(res.status=="404"){
            notFoundCard.style.display ="block"
            resultArea.style.display ="none"
            resetForm()
        }
        else{
            console.log(res)
            resultArea.style.display="block"
            notFoundCard.style.display ="none"
            resultArea.innerHTML=` <div class="profile-card">
                <div class="card-header">
                    <img src=${res.avatar_url} alt="GitHub Profil Rasmi"
                        class="profile-avatar">
                    <div class="user-info">
                        <h3 class="username">${res.name}</h3>
                        <a href=${res.html_url} target="_blank" rel="noopener noreferrer"
                            class="github-link">Github</a>
                    </div>
                </div>

                <p class="bio">
                   ${res.bio}
                </p>

                <div class="stats">
                    <div class="stat-item">
                        <span class="stat-value">${res.public_repos}</span>
                        <span class="stat-label">Repos</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${res.followers}</span>
                        <span class="stat-label">Followers</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${res.following}</span>
                        <span class="stat-label">Following</span>
                    </div>
                </div>

                <div class="profile-details">
                    <div class="detail-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${res.location}</span>
                    </div>
                    <div class="detail-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L9.5 5.5"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L14.5 18.5"></path>
                        </svg>
                        <span><a href=${res.html_url} target="_blank"
                                rel="noopener noreferrer">github.com</a></span>
                    </div>
                </div>
            </div>`
            resetForm()
        }
    })
    .catch(err=>{
        console.log(err)
    })
})


function resetForm(){
    username.value =""
}












