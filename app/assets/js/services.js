(() => {
  angular.module('spBlogger.services', []);

  angular
    .module('spBlogger.services')
    .value('API_ENDPOINT', '/api/posts/:id')
    .value('AUTH_ENDPOINT', '/login')
    .value('LOGOUT_ENDPOINT', '/logout');

  angular
    .module('spBlogger.services')
    .factory('postService', _postService);
  _postService.$inject = [];
  function _postService() {
    return {
      posts: [{
        id: 1,
        title: 'FBI confirms it obtained NSO\'s Pegasus spyware',
        content: `<p>Bureau says sophisticated hacking tool was never used in support of any investigation</p>
          <p>The FBI has confirmed that it obtained NSO Group's powerful Pegasus spyware, suggesting that it 
            bought access to the Israeli surveillance tool to &quot;stay abreast of emerging technologies and 
            tradecraft&quot;.</p>
          <p>In a statement released to the Guardian, the bureau said it had procured a &quot;limited licence&quot; 
            to access Pegasus for &quot;product testing and evaluation only&quot;, and suggested that its evaluation 
            of the tool partly related to security concerns if the spyware fell into the &quot;wrong hands&quot;.</p> 
          <a href="https://www.theguardian.com/news/2022/feb/02/fbi-confirms-it-obtained-nsos-pegasus-spyware">Continue reading...</a>`,
        permalink: '1643826091809',
        author: 'Stephanie Kirchgaessner',
        datePublished: '2022-02-02T13:22:47Z',
      }, {
        id: 2,
        title: 'What your smart TV knows about you - and how to stop it harvesting data',
        content: `<p>Modern TVs gather data that can be monetised. How much of this surveillance can 
            you avoid without turning your smart TV dumb?</p>
          <p>Watching TV feels like a benign pastime, but as all TVs become &quot;smart&quot; - connected to the 
            internet via your router - they are gaining the ability to watch you too. As soon as you 
            switch them on, smart TVs made by the likes of LG, Samsung and Sony are gathering data from 
            the TV itself, as well as from the operating system and apps. Then there are the 
            <a href="https://www.theguardian.com/technology/2021/mar/04/best-uk-streaming-and-pay-tv-services-2021-sky-virgin-netflix-and-amazon-prime-compared-and-ranked">devices you plug into your TV</a>, 
            such as Google's Chromecast, Apple TV and Amazon's Fire Stick.</p>
          <p>A TV is no longer just a device for showing you content - it has become a two-way mirror 
            allowing you to be observed in real time by a network of advertisers and data brokers, says 
            Rowenna Fielding, director of data protection consultancy Miss IG Geek. &quot;The purpose of this 
            is to gather as much information as possible about your behaviour, interests, preferences and 
            demographics so it can be monetised, mainly through targeted advertising.&quot;</p> 
            <a href="https://www.theguardian.com/technology/2022/jan/29/what-your-smart-tv-knows-about-you-and-how-to-stop-it-harvesting-data">Continue reading...</a>`,
        permalink: '1643826121710',
        author: 'Kate O\'Flaherty',
        datePublished: '2022-01-29T17:00:04Z',
      }, {
        id: 3,
        title: 'Easy wins: hit refresh and archive your social media history',
        content: `<p>Rather not have all your pictures, posts and log-in details on the internet for 
            eternity? It takes just a few minutes to download and delete</p>
            <p>Today it is easy to immortalise ourselves by accident. It simply takes existing online.</p>
            <p>The cloud, which holds our photos and status updates (among other 
              <a href="https://www.theguardian.com/world/2013/dec/03/what-can-you-learn-about-me-from-24-hours-of-my-metadata">more ominous metadata</a>), 
              seems omniscient and constant. But what if we begin to feel uncomfortable 
              about the footprints we've left across it?</p> 
            <a href="https://www.theguardian.com/lifeandstyle/2022/jan/29/easy-wins-hit-refresh-and-archive-your-social-media-history">Continue reading...</a>`,
        permalink: '1643826135030',
        author: 'Rafqa Touma',
        datePublished: '2022-01-28T19:00:30Z',
      }, {
        id: 4,
        title: 'The surveillance concerns around China\'s Winter Olympics app - explained',
        content: `<p>A report found the app that will be used to monitor athletes' health and travel 
              data has a 'devastating' encryption flaw</p><p>With the Beijing Olympics just weeks away, 
              concerns are mounting over a mandatory health app for competing athletes, after a 
              <a href="https://citizenlab.ca/2022/01/cross-country-exposure-analysis-my2022-olympics-app/">new report</a> 
              revealed the app contains security flaws and a list of &quot;politically sensitive&quot; words that 
              have been marked for censorship.</p>
            <p>The <a href="https://citizenlab.ca/2022/01/cross-country-exposure-analysis-my2022-olympics-app/">report</a>, 
              published by University of Toronto's research and strategic policy unit Citizen Lab, 
              found that the My2022 app, which will be used to monitor athletes' health and travel data, 
              has a &quot;devastating&quot; encryption flaw that leaves users' files and media vulnerable.</p> 
            <a href="https://www.theguardian.com/world/2022/jan/24/should-athletes-be-worried-about-flaws-in-chinas-olympics-app">Continue reading...</a>`,
        permalink: '1643826145209',
        author: 'Johana Bhuiyan',
        datePublished: '2022-01-24T11:00:49Z',
      }],
      getAll() {
        return this.posts;
      },
      getPostById(id) {
        let post = {};
        Object
          .values(this.posts)
          .forEach((v) => { if (v.id === Number(id)) post = v; });
        return post;
      },
    };
  }

  angular
    .module('spBlogger.services')
    .factory('Post', _post);
  _post.$inject = ['$resource', 'API_ENDPOINT'];
  function _post($resource, API_ENDPOINT) {
    return $resource(API_ENDPOINT, { id: '@_id' }, {
      update: {
        method: 'PUT',
      },
    });
  }

  angular
    .module('spBlogger.services')
    .service('popupService', _popupService);
  _popupService.$inject = ['$window'];
  function _popupService($window) {
    this.showPopup = function _showPopup(message) {
      return $window.confirm(message);
    };
  }

  angular
    .module('spBlogger.services')
    .factory('authService', _authService);
  _authService.$inject = ['$http', '$cookies', 'AUTH_ENDPOINT', 'LOGOUT_ENDPOINT'];
  function _authService($http, $cookies, AUTH_ENDPOINT, LOGOUT_ENDPOINT) {
    const auth = {};
    auth.login = function _login(username, password) {
      return $http.post(AUTH_ENDPOINT, { username, password })
        .then((response) => {
          auth.user = response.data;
          $cookies.put('user', JSON.stringify(auth.user));
          return auth.user;
        });
    };
    auth.logout = function _logout() {
      return $http.post(LOGOUT_ENDPOINT)
        .then(() => {
          auth.user = undefined;
          $cookies.remove('user');
        });
    };
    return auth;
  }
})();
