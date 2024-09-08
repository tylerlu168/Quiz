let questions = 
[
    {
        question: 'What is the capital of Mongolia?',
        choices: ['Djibouti', 'Purple', '43', 'Ulaanbaatar'],
        answers: ['Ulaanbaatar'],
        tags: ['geography'],

    },

    {
        question: 'What color is Math?',
        choices: ['Red', 'Blue', 'Clear', 'Green', 'Orange', 'Rainbow'],
        answers: ['Red', 'Blue'],
        tags:['colors', 'school'],
    },

    {
        question: 'What is the best song?',
        choices: ['Wonderwall - Oasis', 
                    'Back in Black - AC/DC', 
                    'Gucci Gang - Lil Pump',
                    'Mobamba - Sheck Wes',
                    'People in Paris - Kanye West',
                    'Blinding Light - The Weeknd'
                ],
        answers: ['Wonderwall - Oasis'],
        tags: ['music']
    },
];
let quiz = [];
let i = 0;
let score = 0;

function generate()
{
    let tag = document.getElementById("input").value.toLowerCase();

    for(let i = 0; i < questions.length; i++)
    {
        let e = questions[i]; //e for element

        if(e.question.toLowerCase().includes(tag) || 
        e.tags.includes(tag))
        {
            quiz.push(e);
        }
    }
    render();
}

function check(ans)
{
    if(quiz[i].answers.includes(ans))
    {
        score++;
    }

    i++;
    if(i >= quiz.length)
    {
        finalize();
    }
    else{
        render();
    }
    render();
}
function finalize()
{
    let out = 'Congratulations! \n';
    out += 'Final Score: ' + score;
    document.getElementById('output').innerText = out;
}

function render()
{
    let out = quiz[i].question;

    for(let e of quiz[i].choices)
    {
        out += '<div>' + '<button onClick = "check(\''+ e +'\')">' + e + '</button>' + '</div>';
    }

    out += 'Score' + score;

    document.getElementById("output").innerHTML = out;
}