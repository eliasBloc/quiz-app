// Quiz App

function handleStartButton() {
  // when user clicks start submit type button
  $('body').on('click','#inception', function(event) {
    renderQuestionPage();
  })
}

function renderStartPage() {
  // when link is opened this is the first 'page' users see
  console.log(`START OVER AGAIN`)
  $('#js-score').html(``)
  $('main').html(`
    <p>This quiz is to analyze your basic knowledge of Chemistry.</p>
    <figure>
      <img src='${STORE.images[13].src}' alt='${STORE.images[13].alt}' />
      <figcaption>${STORE.images[13].cap}</figcaption>
    </figure>
    <button type='button' id='inception'>START</button>
    <div class='multiple-choices'></div>
  `)
}

function generateStrings() {
  // Templates for what the user sees
  if (STORE.currentQuestion <= 12) {
    return `
    <section>
      <figure>
        <img src='${STORE.images[STORE.currentQuestion].src}' alt='${STORE.images[STORE.currentQuestion].alt}' 
        />
        <figcaption>${STORE.images[STORE.currentQuestion].cap}</figcaption>
      </figure>
      <div class='multiple-choices'>
        <p><strong>${STORE.questions[STORE.currentQuestion].question}</strong></p>
        <form id='js-response'>
          <label for='${STORE.questions[STORE.currentQuestion].choices[0]}'>${STORE.questions[STORE.currentQuestion].choices[0]}</label>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[0]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[0]}' />
          <label for='${STORE.questions[STORE.currentQuestion].choices[1]}'>${STORE.questions[STORE.currentQuestion].choices[1]}</label>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[1]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[1]}' />
          <label for='${STORE.questions[STORE.currentQuestion].choices[2]}'>${STORE.questions[STORE.currentQuestion].choices[2]}</label>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[2]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[2]}' />
          <label for='${STORE.questions[STORE.currentQuestion].choices[3]}'>${STORE.questions[STORE.currentQuestion].choices[3]}</label>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[3]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[3]}' />
          <button type='submit' id='js-next'>GO</button>
        </form>        
      </div>
    </section>`
  } else {
    return `
    <section>
      <h3>Results of Chemistry Quiz</h3>
      <form id='js-end'>
        <p id='score-sheet'><strong>Score: <i>${Math.floor(STORE.score*100/13)}%</i></strong></p>
        <button type='submit' id='end'>Restart</button>
      </form>
      <div class='multiple-choices'></div>
    </section>`
  }
}

function renderQuestionPage() {
  // when user clicks next button, new question and results page
  if (STORE.currentQuestion <= 12) {
    $('#js-score').html(`<span>Score: ${Math.floor(STORE.score*100/13)}%</span>`);
    $('main').html(`
      <header class='container'>
        <h2>
          Question ${STORE.currentQuestion+1} of ${STORE.questions.length}
        </h2>
      </header>`);
    const questionString = generateStrings(STORE.currentQuestion);
    $('main').append(questionString);
  } else {
    const questionString = generateStrings(STORE.currentQuestion);
    $('main').append(questionString);
    STORE.score = 0;
  }
}

function handleAnswerSubmission() {
  // when users click button type submit
  $('body').on('submit','#js-response', function(event) {
    event.preventDefault();
    let choice = $('input[name=js-question-text]:checked').val();
    if (!choice) {
      alert('Choose an option');
      return;
    }
    renderFeedbackPage(choice);
    STORE.currentQuestion++;
  })
  $('main').on('click','#js-new-question', function(event) {
    if (STORE.currentQuestion > 12) {
      $('#js-score').html(`Quiz Complete!`);
      $('main').html(`
        <header class='container'>
          <h2>
            Results Page
          </h2>
        </header>
      `);
      renderQuestionPage();
      STORE.currentQuestion = 0;
    } else {
      renderQuestionPage();
    }
  })
}

function renderFeedbackPage(choice) {
  // what users see immediately after submitting an answer
  if ( choice === STORE.questions[STORE.currentQuestion].answer ) {
    STORE.score++;
    $('#js-next').addClass('hidden');
    $('#js-score').html(`<span>Score: ${Math.floor(STORE.score*100/13)}%</span>`);
    $('.multiple-choices').append(`
      <section class='feedback correct'>
        <header>Correct</header>
        <p>What you submitted was correct!</p>
        <button type='button' id='js-new-question'>NEXT</button>
      </section>
    `)
  }
  else {
    $('#js-next').addClass('hidden');
    $('.multiple-choices').append(`
      <section class='feedback incorrect'>
        <header>Incorrect</header>
        <p>What you submitted was incorrect.</p>
        <p>The correct answer was: </p> 
        <p>${STORE.questions[STORE.currentQuestion].answer}</p>
        <button type='button' id='js-new-question'>NEXT</button>
      </section>
    `)
  }
}

function handleRestart() {
// restarts the quiz app
  $('body').on('submit','#js-end', event => {
    event.preventDefault();
    console.log(`restart button clicked`)
    renderStartPage();
  })
}

function handleQuizApp() {
  handleStartButton();
  handleAnswerSubmission();
  handleRestart();
}

$(handleQuizApp);