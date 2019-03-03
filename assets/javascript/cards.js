// Make a new character
class Card {
    constructor(title, description, picture, link) {
        this.title = title;
        this.description = description;
        this.picture = picture;
        this.link = link;
        this.button = `Go to ${this.title}`
    }
    makeCard(location) {
        let id = this.title.replace(/\s+/g, '');
        id = id.toLowerCase();
        var locationDiv = $(`#${location}`)
        locationDiv.append(`<div class="col-xs-12 col-sm-6 col-md-4"><div class="card w-100 portfolio_card" id="${id}-card-${location}"></div></div>`);
        let newCard = $(`#${id}-card-${location}`);
        newCard.append(`<img src="${this.picture}" class="card-img-top" alt="${this.name}" id="${id}-image-${location}">`);
        newCard.append(`<div class="card-body card_body" id="${id}-card-body-${location}"></div>`);
        let cardBody = $(`#${id}-card-body-${location}`);
        cardBody.append(`<h5 class="card-title">${this.title}</h5>`);
        cardBody.append(`<p class="card-text d-none d-md-flex">${this.description}</p>`);
        cardBody.append(`<a href="${this.link}" class="btn btn-primary button_color" id="${id}-card-button-${location}">${this.button}</button>`);
    }
}