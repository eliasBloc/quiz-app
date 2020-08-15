// Quiz App

function handleStartButton() {
  // when user clicks start submit type button
  $('#inception').on('click', function(event) {
    console.log('`handleStartButton` has run');
    renderQuestionPage();
  })
}

function renderStartPage() {
  // when link is opened this is the first 'page' users see

  console.log('`renderStartPage` has run')
}

function generateStrings() {
  if (STORE.currentQuestion < 10) {
    console.log('First Question generated')
    return `
    <section>
      <figure>
        <img src='${STORE.images[STORE.currentQuestion].src}' alt='${STORE.images[STORE.currentQuestion].alt}' 
        />
        <figcaption>${STORE.images[STORE.currentQuestion].cap}</figcaption>
      </figure>
      <div class='multiple-choices'>
        <p>${STORE.questions[STORE.currentQuestion].question}</p>
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
  }
}

function renderQuestionPage() {
  // when user clicked the start  quiz button this is the first page
  $('header').append(`<span>Score: ${STORE.score}%</span>`);
  $('main').html(`
  <header class='container'>
    <h2>
      Question ${STORE.currentQuestion} of ${STORE.questions.length}
    </h2>
  </header>`)
  if (STORE.currentQuestion === 0) {
    const questionString = generateStrings(STORE.currentQuestion);
    $('main').append(questionString)
  }
  
  console.log('`renderQuestionPage` has run')
}

function handleAnswerSubmission() {
  // when users click button type submit
  $('body').on('submit','#js-response', function(event) {
    event.preventDefault();
    
    let choice = $('input[name=js-question-text]:checked').val();
    console.log(`Submission detected: ${choice}`)
    if (!choice) {
      alert('Choose an option');
      return;
    }
    renderFeedbackPage(choice);
    STORE.currentQuestion++;
  })
}

function renderFeedbackPage(choice) {
  // what users see immediately after submitting an answer
  if ( choice === STORE.questions[STORE.currentQuestion].answer ) {
    STORE.score++;
    $('#js-next').addClass('hidden');
    $('.multiple-choices').append(`
    <section class='feedback correct'>
      <header>Correct</header>
      <p>What you submitted was correct!</p>
      <button type='click'>NEXT</button>
    </section>
    `)}
  else {
    $('#js-next').addClass('hidden');
    $('.multiple-choices').append(`
    <section class='feedback incorrect'>
      <header>Incorrect</header>
      <p>What you submitted was incorrect.</p>
      <p>The correct answer was ${STORE.questions[STORE.currentQuestion].answer}
      <button type='click'>NEXT</button>
    </section>
  `)}
  console.log('`renderFeedbackPage` has run')
}

function handleRestart() {
// restarts the quiz app
  $('.feedback').on('click','button', event => {
    console.log('detected a sign to move forward')
    renderQuestionPage();
    console.log('`handleRestart` has run')
  })
  $('body').on('submit','#end', event => {
    renderStartPage();
    console.log('`handleRestart` has run')
  })
  
}

function handleQuizApp() {
  handleStartButton();
  handleAnswerSubmission();
  handleRestart();
}

$(handleQuizApp);