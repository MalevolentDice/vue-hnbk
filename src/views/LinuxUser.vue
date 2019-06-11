<template>
    <div class="linuxuser">
        <div class="description description--main">
            <h1>Linux User files</h1>
            <p>Hover over the entries to get a description.</p>
        </div>
        <div class="file file--passwd">
            <div class="file__description file__description--passwd">
                <h1>The /etc/passwd file</h1>
                <p>Stores essential information, which is required during login.</p>
            </div>
            <div class="file__example file__example--passwd">
                <div class="entry">jensenackles</div>
                <div class="explanation">User name</div>
                <div class="entry">x</div>
                <div class="explanation">Password, x meaning there's an entry in /etc/shadow.</div>
                <div class="entry">1020</div>
                <div class="explanation">User ID</div>
                <div class="entry">1021</div>
                <div class="explanation">Group ID</div>
                <div class="entry">actor</div>
                <div
                    class="explanation"
                >Comment field. Allows you to add extra information about the users.</div>
                <div class="entry">/home/jensenackles</div>
                <div
                    class="explanation"
                >Absolute path to the home directory. If this directory does not exist then users directory becomes /</div>
                <div class="entry">/bin/bash</div>
                <div class="explanation">Absolute path of a command or shell (/bin/bash).</div>
            </div>
        </div>

        <div class="file file--shadow">
            <div class="file__description file__description--shadow">
                <h1>The /etc/shadow file</h1>
                <p>Stores secure user account information and the actual password in hashed format.</p>
            </div>
            <div class="file__example file__example--shadow">
                <div class="entry">jensenackles</div>
                <div class="explanation">User name</div>
                <div class="entry">$6$jhsfjhs$gJHGUfzhg./GhUzvjwg</div>
                <div
                    class="explanation"
                >Hashed password. Usually password format is set to $id$salt$hashed, $id$ as $6$ is the algorithm SHA-512.</div>
                <div class="entry">17956</div>
                <div
                    class="explanation"
                >Date of last password change (Days since Jan 1, 1970 the password was last changed).</div>
                <div class="entry">0</div>
                <div class="explanation">Minimum number of days required between password changes.</div>
                <div class="entry">99999</div>
                <div
                    class="explanation"
                >Maximum number of days the password is valid (after that user is forced to change his/her password).</div>
                <div class="entry">7</div>
                <div
                    class="explanation"
                >Number of days before user gets warned about his password expiring.</div>
                <div class="entry">_</div>
                <div
                    class="explanation"
                >Number of days after the password expires until the account gets disabled.</div>
                <div class="entry">_</div>
                <div
                    class="explanation"
                >Days since Jan 1, 1970 that account is disabled i.e. an absolute date specifying when the login may no longer be used.</div>
            </div>
        </div>

        <div class="file file--group">
            <div class="file__description file__description--group">
                <h1>The /etc/group file</h1>
                <p>Defines the groups to which users belong.</p>
            </div>
            <div class="file__example file__example--group">
                <div class="entry">monsterhunter</div>
                <div class="explanation">Group name</div>
                <div class="entry">x</div>
                <div
                    class="explanation"
                >Password: Generally password is not used but it can store a hashed password. This is useful for implementing privileged groups.</div>
                <div class="entry">1021</div>
                <div class="explanation">Group ID</div>
                <div class="entry">
                    <p>jensenackles, deanwinchester, buffysummers</p>
                </div>
                <div
                    class="explanation"
                >List of members of the group. The user names are separated by commas.</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "linuxuser"
};
</script>

<style scoped>
.linuxuser {
    justify-items: center;
    display: grid;
    grid-column: 1fr;
    grid-template-areas:
        "description--main"
        "passwd"
        "shadow"
        "group";
}

.description--main {
    grid-area: description--main;
}

.file--passwd {
    grid-area: passwd;
}

.file--shadow {
    grid-area: shadow;
}

.file--group {
    grid-area: group;
}

.file {
    max-width: 700px;
}

.file__example--passwd {
    display: grid;
    grid-template-areas:
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "explanation";
}

.file__example--shadow {
    display: grid;
    grid-template-areas:
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "explanation";
}

.file__example--group {
    display: grid;
    grid-template-areas:
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "entry"
        "explanation";
}

@media screen and (min-width: 710px) {
    .linuxuser {
        grid-column: 1fr 700px 1fr;
        grid-template-areas:
            ". description--main ."
            ". passwd ."
            ". shadow ."
            ". group .";
    }

    .file__example--passwd {
        grid-template-areas:
            "entry       entry       entry       entry       entry       entry       entry"
            "explanation explanation explanation explanation explanation explanation explanation";
    }

    .file__example--shadow {
        grid-template-areas:
            "entry       entry       entry       entry       entry       entry       entry       entry"
            "explanation explanation explanation explanation explanation explanation explanation explanation";
    }

    .file__example--group {
        grid-template-areas:
            "entry       entry       entry       entry"
            "explanation explanation explanation explanation";
    }
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

.entry:hover + .explanation {
    opacity: 1;
}
</style>
