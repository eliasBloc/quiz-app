// Quiz App

function handleStartButton() {
  // when user clicks start submit type button
  $('body').on('click','#js-inception', function(event) {
    STORE.startTime = event.timeStamp;
    renderQuestionPage();
  })
}

function renderStartPage() {
  // when link is opened this is the first 'page' users see
  $('#js-score').html(``)
  $('main').html(`
    <section>
      <p>This quiz is to analyze your basic knowledge of Chemistry.</p>
      <figure>
        <img src='${STORE.images[13].src}' alt='${STORE.images[13].alt}' />
        <figcaption>${STORE.images[13].cap}</figcaption>
      </figure>
      <button type='button' id='js-inception'>START</button>
    </section>
    <div class='multiple-choices js-multiple-choices'></div>
  `)
}

function generateStrings() {
  // Templates for what the user sees
  if (STORE.currentQuestion <= 12) {
    return `
    <section>
      <h2>Question ${STORE.currentQuestion+1} of ${STORE.questions.length}</h2>
      <figure>
        <img src='${STORE.images[STORE.currentQuestion].src}' alt='${STORE.images[STORE.currentQuestion].alt}' 
        />
        <figcaption>${STORE.images[STORE.currentQuestion].cap}</figcaption>
      </figure>
      <div class='multiple-choices js-multiple-choices'>
        <p><strong>${STORE.questions[STORE.currentQuestion].question}</strong></p>
        <form id='js-response'>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[0]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[0]}' />  
          <label for='${STORE.questions[STORE.currentQuestion].choices[0]}'>${STORE.questions[STORE.currentQuestion].choices[0]}</label>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[1]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[1]}' />
          <label for='${STORE.questions[STORE.currentQuestion].choices[1]}'>${STORE.questions[STORE.currentQuestion].choices[1]}</label>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[2]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[2]}' />
          <label for='${STORE.questions[STORE.currentQuestion].choices[2]}'>${STORE.questions[STORE.currentQuestion].choices[2]}</label>
          <input type='radio' name='js-question-text' id='${STORE.questions[STORE.currentQuestion].choices[3]}'  class='js-input-radio' value='${STORE.questions[STORE.currentQuestion].choices[3]}' />
          <label for='${STORE.questions[STORE.currentQuestion].choices[3]}'>${STORE.questions[STORE.currentQuestion].choices[3]}</label>
          <button type='submit' id='js-next'>GO</button>
        </form>        
      </div>
    </section>`
  } else {
    const duration = (STORE.endTime-STORE.startTime)/1000;
    return `
    <section class='results-page'>
      <h3>Grade Results of Chemistry Quiz</h3>
      <p id='score-sheet'><i>Score:  ${Math.floor(STORE.score*100/13)}%</i></p>
      <h3>Time Elapsed in Chemistry Quiz</h3>
      <p><i>Duration of Test:   ${Math.floor(duration/60)}min(s)</i></p>
      <h3>Number of Quiz Attempts</h3>
      <p><i>Attempts made:   ${STORE.retakes+1}</i></p>
      <form id='js-end'>
        <button type='submit'>Restart</button>
      </form>
      <div class='multiple-choices js-multiple-choices'></div>
    </section>`
  }
}

function renderQuestionPage() {
  // when user clicks next button, new question and results page
  if (STORE.currentQuestion <= 12) {
    $('#js-score').html(`<i>Score: ${Math.floor(STORE.score*100/13)}%</i>`);
    const questionString = generateStrings();
    $('main').html(questionString);
  } else {
    const questionString = generateStrings();
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
      STORE.endTime = event.timeStamp;
      $('#js-score').html(`Quiz Complete!`);
      $('main').html(`<h2>Results Page</h2>`);
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
    $('.js-multiple-choices').append(`
      <section class='feedback correct'>
        <h3>Correct!</h3>
        <i>"${STORE.questions[STORE.currentQuestion].answer}"</i>
        <button type='button' id='js-new-question'>NEXT</button>
      </section>
    `)
  }
  else {
    $('#js-next').addClass('hidden');
    $('.js-multiple-choices').append(`
      <section class='feedback incorrect'>
        <h3>Incorrect</h3>
        <p>The correct answer was: </p> 
        <i>"${STORE.questions[STORE.currentQuestion].answer}"</i>
        <button type='button' id='js-new-question'>NEXT</button>
      </section>
    `)
  }
}

function handleRestart() {
// restarts the quiz app
  $('body').on('submit','#js-end', event => {
    event.preventDefault();
    renderStartPage();
    STORE.retakes++
  })
}

function handleQuizApp() {
  handleStartButton();
  handleAnswerSubmission();
  handleRestart();
}

$(handleQuizApp);