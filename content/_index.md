---
title: Neutron Studio
readingTime: false
---

<style>
  .banner {
    background-image: url('/icon.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;
    text-shadow: rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px, rgb(0, 0, 0) 1px 1px 0px;
    min-height: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner h1 {
    margin: 0 auto 0 auto !important;
    font-size: 3rem;
    color: rgb(0, 121, 107);
  }

  .banner h2 {
    margin: 20px auto 10px auto !important;
  }

  .projects {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .projects > div {
    width: 290px;
    display: flex;
    flex-direction: column;
  }

  .projects > div:nth-child(2) {
    margin: 0 40px;
  }

  .projects h3 {
    margin: 0 auto 20px auto !important;
    text-align: center;
  }

  .projects h4 {
    margin: 0 auto 20px auto !important;
    text-align: center;
    font-weight: normal;
    font-style: italic;
  }

  .projects i.block {
    display: block;
    margin: 20px 0 5px 0;
    text-align: center;
    font-size: 3rem;
  }

  .projects .v-card__text {
    flex: 1;
  }

  .projects .v-card__actions {
    padding-top: 15px;
  }

  .projects a.v-btn {
    background-color: var(--accent);
    text-decoration: none;
    display: inline-block;
    padding: 8px 12px;
    border-radius: 10px;
    font-weight: bold;
  }
</style>
<div class="banner">
  <div class="wrapper">
    <h1>Neutron Studio</h1>
    <h2>Web applications with cat logos</h2>
  </div>
</div>

<div class="projects">
  <div class="v-card v-sheet theme--light">
    <div class="v-card__title">
      <i aria-hidden="true" class="mdi mdi-account-group block"></i>
      <h3>TeamBeat</h3>
      <h4>Keep your remote team on track with async e-mail scrums</h4>
    </div>
    <div class="v-card__text">
      Keep track of your team without wasting time in meetings. Ideal for remote teams especially in different timezones.
    </div>
    <div class="v-card__actions">
      <a href="https://www.teambeat.app/" target="_blank" class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default primary">
        <span class="v-btn__content">
          Open App
          <i aria-hidden="true" class="v-icon notranslate mdi mdi-open-in-new theme--light"></i>
        </span>
      </a>
    </div>
  </div>
  <div class="v-card v-sheet theme--light">
    <div class="v-card__title">
      <i aria-hidden="true" class="mdi mdi-waves block"></i>
      <h3>CanyonLake.app</h3>
      <h4>Your guide to fun in Canyon Lake, TX</h4>
    </div>
    <div class="v-card__text">
      CanyonLake.app collects all the latest lake and river conditions and area events in one place so you can plan your next fun adventure in the Canyon Lake, Texas area.
    </div>
    <div class="v-card__actions">
      <a href="https://www.canyonlake.app/" target="_blank" class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default primary">
        <span class="v-btn__content">
          Open App
          <i aria-hidden="true" class="v-icon notranslate mdi mdi-open-in-new theme--light"></i>
        </span>
      </a>
    </div>
  </div>
  <div class="v-card v-sheet theme--light">
    <div class="v-card__title">
      <i aria-hidden="true" class="mdi mdi-broadcast block"></i>
      <h3>PodcastBible.app</h3>
      <h4>Create a custom Bible Podcast.</h4>
    </div>
    <div class="v-card__text">
      The Podcast Bible lets you create a custom reading plan tailored to your needs via a custom podcast feed.
    </div>
    <div class="v-card__actions">
      <a href="https://www.podcastbible.app/" target="_blank" class="v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default primary">
        <span class="v-btn__content">
          Open App
          <i aria-hidden="true" class="v-icon notranslate mdi mdi-open-in-new theme--light"></i>
        </span>
      </a>
    </div>
  </div>
</div>
