class ScoreBoardPage {
    navigate() {
        cy.visit('/#/score-board');
    }
    getSolvedCount() {
        return cy.get(".score");
    }
}

const scoreBoardPage = new ScoreBoardPage();
export default scoreBoardPage;