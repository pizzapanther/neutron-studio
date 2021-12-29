---
layout: home
title: Home
---

<div class="banner">
  <div class="img">
    <img src="assets/icon.svg" alt="">
  </div>
  <div class="wrapper">
    <h1>Neutron Studio</h1>
    <h2>Web applications with cat logos</h2>
  </div>
</div>
<div class="projects">
  <div id="projects">
    <h2>Our Projects</h2>
  </div>
  <div class="project-cards">
    <v-card>
      <v-card-title>
        <v-icon color="accent">mdi-source-branch-sync</v-icon>
        <h3>Neutron Sync</h3>
        <h4>Sync SSH keys, configuration files, personal settings, etc</h4>
      </v-card-title>
      <v-card-text>
        Synchronization tool that helps you synchronize your small configuration files. Since these files are often sensitive, everything is encrypted locally before being stored.
      </v-card-text>
      <v-card-actions>
        <v-btn href="https://www.neutronsync.com/" target="_blank" color="primary">
          Open App
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        <v-icon color="accent">mdi-waves</v-icon>
        <h3>CanyonLake.app</h3>
        <h4>Your guide to fun in Canyon Lake, Texas</h4>
      </v-card-title>
      <v-card-text>
        CanyonLake.app collects all the latest lake and river conditions and area events in one place so you can plan your next fun adventure in the Canyon Lake, Texas area.
      </v-card-text>
      <v-card-actions>
        <v-btn href="https://www.canyonlake.app/" target="_blank" color="primary">
          Open App
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card>
      <v-card-title>
        <v-icon color="accent">mdi-broadcast</v-icon>
        <h3>PodcastBible.app</h3>
        <h4>Create a custom Bible Podcast.</h4>
      </v-card-title>
      <v-card-text>
        The Podcast Bible lets you create a custom reading plan tailored to your needs via a custom podcast feed.
      </v-card-text>
      <v-card-actions>
        <v-btn href="https://www.podcastbible.app/" target="_blank" color="primary">
          Open App
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</div>
<div class="contact">
  <div>
    <h2>Contact</h2>
    <p>
      <v-btn fab large color="primary" href="mailto:inquiry@neutron.studio">
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </p>
  </div>
  <div>
    <h2>Blog</h2>
    <p>
      <v-btn fab large color="primary" href="/blog/">
        <v-icon>mdi-newspaper-variant-outline</v-icon>
      </v-btn>
    </p>
  </div>
</div>
