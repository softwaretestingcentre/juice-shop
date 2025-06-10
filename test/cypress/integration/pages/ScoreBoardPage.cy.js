class ScoreBoardPage {
    navigate() {
        cy.visit('/#/score-board');
    }
    getSolvedChallenge(challengeName) {
        return cy.get("//challenge-card[contains(concat(' ', normalize-space(@class), ' '), ' solved ')]//*[text()='" + challengeName + "']");
    }
}

const scoreBoardPage = new ScoreBoardPage();
export default scoreBoardPage;