
const votes = {
    javascript: 0,
    python: 0,
    java: 0,
    cpp: 0
};


function handleVote(option) {
   
    votes[option]++;
    
    
    updateResults();
}


function updateResults() {
    for (const option in votes) {
        const voteElement = document.getElementById(`${option}-votes`);
        voteElement.textContent = `${capitalize(option)}: ${votes[option]} voto${votes[option] !== 1 ? 's' : ''}`;
    }
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', () => {
        const selectedOption = option.dataset.option;
        handleVote(selectedOption);
    });
});
