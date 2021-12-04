 const TOKEN = '064fc825-8a38-497e-b79d-9599b0efc019';
 const ADDRESS = 'https://around.nomoreparties.co/v1/group-12';

 class API {
    constructor({ baseUrl, headers }) {
      this._url = baseUrl;
      this._headers = headers;
    }
  
    _handleResponse(res) {
        if (res.ok) {
          return res.json();
        }else{
        console.log(`${res.status}: ${res.statusText}`);
        return Promise.reject(`${res.status}: ${res.statusText}`);
        }
      }
/*Public*/
    getAll() {
      return Promise.all([this.getInitialCards(), this.getUserInfo()]);
    }
    getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  }

    getInitialCards() {
      return fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._handleResponse);
    }

    updateUserInfo({ name, about }) {
      return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        }),
      }).then(this._handleResponse);
    }
  
    updateUserImage(avatar) {
      console.log(avatar);
      return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar,
        }),
      }).then(this._handleResponse);
    }
  
    addNewCard(data) {
      const { name, link } = data;
      return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      }).then(this._handleResponse);
    }
  
    deleteCard(card_id) {
      return fetch(`${this._url}/cards/${card_id}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(this._handleResponse);
    }

    changeLikeCardStatus(card_id, isLiked) {
      return fetch(`${this._url}/cards/likes/${card_id}`, {
        method: ((!isLiked) ? 'DELETE' : 'PUT'),
        headers: this._headers,
      }).then(this._handleResponse);
    }

    likeCard(card_id) {
      return fetch(`${this._url}/cards/likes/${card_id}`, {
        method: 'PUT',
        headers: this._headers,
      }).then(this._handleResponse);
    }
  
    dislikeCard(card_id) {
      return fetch(`${this._url}/cards/likes/${card_id}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(this._handleResponse);
    }
  }

  const api = new API({
    baseUrl: ADDRESS,
    headers: {
      authorization: TOKEN,
      'content-type': 'application/json',
    },
  });
  export default api;