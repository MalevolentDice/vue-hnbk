<template>
  <div class="linuxuser">
    <div class="userfiledescription">
      <div class="description">
        <h1>Linux User files</h1>
        <p>Hover over the entries to get a description.</p>
      </div>
    </div>
    <div class="passwd">
      <div class="description">
        <h1>The /etc/passwd file</h1>
        <p>Stores essential information, which is required during login.</p>
      </div>
      <div class="example">
        <div class="entry">jensenackles</div>
        <div class="explanation">The user name</div>
        <div class="entry">x</div>
        <div class="explanation">The password, x meaning there's an entry in /etc/shadow.</div>
        <div class="entry">1020</div>
        <div class="explanation">The user ID</div>
        <div class="entry">1021</div>
        <div class="explanation">The Group ID</div>
        <div class="entry">actor</div>
        <div class="explanation">The comment field. It allow you to add extra information about the users.</div>
        <div class="entry">/home/jensenackles</div>
        <div class="explanation">The absolute path to the directory the user will be in when they log in. If this directory does not exists then users directory becomes /</div>
        <div class="entry">/bin/bash</div>
        <div class="explanation">The absolute path of a command or shell (/bin/bash). Typically, this is a shell. Please note that it does not have to be a shell.</div>
      </div>
    </div>
    
    <div class="shadow">
      <div class="description">
        <h1>The /etc/shadow file</h1>
        <p>Stores secure user account information and the actual password in hashed format.</p>
      </div>
      <div class="example">
        <div class="entry">jensenackles</div>
        <div class="explanation">The user name</div>
        <div class="entry">$6$jhsfjhs$gJHGUfzhg./GhUzvjwg</div>
        <div class="explanation">The hashed password. Usually password format is set to $id$salt$hashed, $id$ is the algorithm SHA-512.</div>
        <div class="entry">17956</div>
        <div class="explanation">Days since Jan 1, 1970 that password was last changed - Date of last password change.</div>
        <div class="entry">0</div>
        <div class="explanation">The minimum number of days required between password changes.</div>
        <div class="entry">99999</div>
        <div class="explanation">The maximum number of days the password is valid (after that user is forced to change his/her password).</div>
        <div class="entry">7</div>
        <div class="explanation">The number of days before password is to expire that user is warned that his/her password must be changed.</div>
        <div class="entry"> </div>
        <div class="explanation">The number of days after password expires that account is disabled.</div>
        <div class="entry"> </div>
        <div class="explanation">Days since Jan 1, 1970 that account is disabled i.e. an absolute date specifying when the login may no longer be used.</div>
      </div>
    </div>

    <div class="group">
      <div class="description">
        <h1>The /etc/group file</h1>
        <p>Defines the groups to which users belong.</p>
      </div>
      <div class="example">
        <div class="entry">monsterhunter</div>
        <div class="explanation">The user name</div>
        <div class="entry">x</div>
        <div class="explanation">Password: Generally password is not used, hence it is empty/blank. It can store a hashed password. This is useful to implement privileged groups.</div>
        <div class="entry">1021</div>
        <div class="explanation">Group ID</div>
        <div class="entry">jensenackles,deanwinchester,buffysummers</div>
        <div class="explanation">Group List: It is a list of user names of users who are members of the group. The user names, must be separated by commas.</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.linuxuser {
  justify-items: center;
  display: grid;
  grid-column: 1fr;
  grid-template-areas:
  "userfiledescription"
  "passwd"
  "shadow"
  "group";
}

@media screen and (min-width: 900px){
  .linuxuser {
    grid-column: 1fr 1fr 1fr;
    grid-template-areas:
    ". userfiledescription ."
    ". passwd ."
    ". shadow ."
    ". group .";
  }
}

.userfiledescription {
  grid-area: userfiledescription;
}

.passwd {
  grid-area: passwd;
}

.shadow {
  grid-area: shadow;
}

.group {
  grid-area: group;
}

.passwd, .shadow, .group {
  max-width: 700px;
}


.passwd .example {
  display: grid;
  grid-template-areas: 
  "entry       entry       entry       entry       entry       entry       entry"
  "explanation explanation explanation explanation explanation explanation explanation";
}

.shadow .example {
  display: grid;
  grid-template-areas: 
  "entry       entry       entry       entry       entry       entry       entry       entry"
  "explanation explanation explanation explanation explanation explanation explanation explanation";
}

.group .example {
  display: grid;
  grid-template-areas: 
  "entry       entry       entry       entry"
  "explanation explanation explanation explanation";
}

.entry {
  border: 1px solid black;
  padding: 2px;
  border-radius: 5px;
}

.explanation {
  opacity: 0;
  grid-area: explanation;
  padding: 5px;
  background-color: #86eebf;
  border: 1px solid black;
  border-radius: 5px;
}

.entry:hover {
  background-color: #86eebf;
}

.entry:hover+.explanation {
  opacity: 1;
}
</style>
