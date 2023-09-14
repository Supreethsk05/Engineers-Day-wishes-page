
function animateGreeting() {
    const letters = document.querySelectorAll('.title span');
    
    // Animate each letter with a slight delay between them
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transform = 'translateY(0)';  
            letter.style.opacity = '1';  
            }, index * 50);  

        });
}


function showBranchInfo(branch) {
    const infoDiv = document.getElementById('branchInfo');
    const allButtons = document.querySelectorAll('.branches button');

    

    document.body.style.opacity = 0;

    // After a short delay, change the background image and restore opacity
    setTimeout(() => {
        document.body.style.backgroundImage = `url(${bgImage})`;
        document.body.style.opacity = 1;
    }, 500);
    const letters = document.querySelectorAll('.title span');
    letters.forEach(letter => {
        letter.style.transform = 'translateY(-100%)';  
        letter.style.opacity = '0';  
    });
    

    // After a short delay, animate the greeting again
    setTimeout(() => {
        animateGreeting();
    }, 500);





    allButtons.forEach(btn => {
        btn.style.opacity = 0.5;
        btn.classList.remove('selected');
    });

    // Make the clicked button fully opaque and add 'selected' class
    event.target.style.opacity = 1;
    event.target.classList.add('selected');

    const bgImage = event.target.getAttribute('data-bg');
    document.body.style.backgroundImage = `url(${bgImage})`; // Set the background image




    let content = '';
    switch(branch) {
        case 'Computer':
            content = `
            <h2>Computer Science (CS)</h2>
            <p><strong>Origin of Bugs:</strong> The term "bug" for a software glitch came from an actual moth found trapped in a computer in 1947. Yep, the first debugging involved insect removal!</p>
            <p><strong>Contribution to Society:</strong> CS folks basically gave us the ability to avoid human contact by chatting, shopping, dating, and working online. What a time to be alive!</p>
            <p><strong>Bias Alert:</strong> Let's be honest, without CS students, you'd be reading this on paper, after waiting weeks for a reply from a human. And that human wouldn't be half as witty as me!</p>
            `;
            break;
        case 'Electrical':
            content = `
            <h2>Electrical Engineering (EE) & Electronics & Communication (EC)</h2>
            <p><strong>Shockingly Important:</strong> Ever get shocked touching a doorknob? Thank an EE for understanding why and an EC for probably laughing at you.</p>
            <p><strong>Contribution to Society:</strong> These engineers gave us everything from the ability to toast bread to sending cat videos wirelessly around the world. Priorities!</p>
            `;
            break;
        case 'Mechanical':
            content = `
            <h2>Mechanical Engineering (Mech)</h2>
            <p><strong>Moving the World:</strong> Without them, our primary mode of transportation might still be walking or riding animals. "Hold on, just parking my horse!"</p>
            <p><strong>Contribution to Society:</strong> They make things move, from cars to elevators. Because, let's face it, stairs are overrated.</p>
            `;
            break;
        case 'Aerospace':
            content = `
            <h2>Aerospace Engineering (Aero)</h2>
            <p><strong>It's Not Rocket Science:</strong> Oh wait, it is! Thanks to them, we've gone from "the world is flat" to "Hey, let's go to Mars for the weekend!"</p>
            <p><strong>Contribution to Society:</strong> Made space travel a reality, and more importantly, gave us the phrase, "It's not rocket science."</p>
            `;
            break;
        case 'Chemical':
            content = `
            <h2>Chemical Engineering</h2>
            <p><strong>Breaking Bad:</strong> No, not all chemical engineers are making blue meth in RVs, but they do know their reactions!</p>
            <p><strong>Contribution to Society:</strong> From turning crude oil into the plastic that makes up your keyboard to ensuring your drink is fizzy, they've got all reactions covered.</p>
            `;
            break;
        case 'Civil':
            content = `
            <h2>Civil Engineering</h2>
            <p><strong>Concrete Jungle Makers:</strong> If a building stands up, thank a civil engineer. If it falls down... maybe don't mention you know them.</p>
            <p><strong>Contribution to Society:</strong> They build our cities and ensure that when we flush, the mysteries of the sewer take it away.</p>
            `;
            break;
        default:
            content = '<p>Select a branch to view its details.</p>';
    }

    infoDiv.innerHTML = content;
    infoDiv.style.display = 'block';
}
window.onload = animateGreeting;
