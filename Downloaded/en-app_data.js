(function() {
    try {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
        e.SENTRY_RELEASE = {
            id: "botc-app@3.48.1"
        }
    } catch {}
}
)();
try {
    (function() {
        var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {}
          , t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "6527b1f8-7a3b-4a45-960b-92837ae1b2c9",
        e._sentryDebugIdIdentifier = "sentry-dbid-6527b1f8-7a3b-4a45-960b-92837ae1b2c9")
    }
    )()
} catch {}
const o = {
    "account-levels": {
        free: "Free",
        "patreon-demon": "Demon tier",
        "patreon-minion": "Minion tier",
        "patreon-townsfolk": "Townsfolk tier",
        "special-free": "Complimentary",
        "special-moderator": "Moderator",
        "special-tpi": "TPI Staff"
    },
    botc_online: "BOTC Online",
    button_cancel: "Cancel",
    button_close: "Close",
    button_confirm: "Confirm",
    button_continue: "Continue",
    button_logout: "Logout",
    button_search: "Search",
    button_send: "Send",
    cookie_policy: "Cookie Policy",
    privacy_policy: "Privacy Policy",
    "session-tags": {
        cameras: {
            label: "Cameras",
            title: "Whether cameras are being used in this game session",
            value_0: "Optional",
            value_1: "Required",
            value_2: "Off"
        },
        difficulty: {
            label: "Difficulty",
            title: "The expected experience level of the players in this game session",
            value_0: "Average",
            value_1: "Veteran",
            value_2: "Beginner"
        },
        grimoire: {
            label: "Grimoire Access",
            title: "Whether spectators receive access to the Grimoire",
            value_0: "Ask",
            value_1: "Yes",
            value_2: "No"
        },
        streaming: {
            label: "Game Is Streamed",
            title: "The game session will be streamed live",
            value_0: "No",
            value_1: "Yes"
        },
        subscription: {
            label: "Subscription Required",
            title: "Joining this game requires an active subscription"
        },
        travellers: {
            label: "Travellers",
            title: "Whether travellers are allowed in this game session",
            value_0: "Optional",
            value_1: "Yes",
            value_2: "No"
        }
    },
    terms_of_use: "Terms of Use",
    title: "Blood on the Clocktower Online",
    trademark: '"Blood on the Clocktower" is a trademark of Steven Medway and The Pandemonium Institute.',
    unnamed_user: "Unnamed user"
}
  , r = {
    abilities: {
        "distribute-roles": "Distribute Roles",
        "ghost-votes": "Return Ghost Votes",
        grimoire: "Show Grimoire",
        "open-eyes": "Open/Close Eyes",
        pointing: "Choose Player"
    },
    demon: "Demon|Demons",
    fabled: "Fabled|Fabled",
    loric: "Loric|Loric",
    minion: "Minion|Minions",
    outsider: "Outsider|Outsiders",
    phases: {
        day: "First Day|Day {n}",
        end: "In between games",
        first_night: "First Night",
        night: "First Night|Night {n}",
        other_nights: "Other Nights",
        start: "Preparing Night 1"
    },
    player: "Player {0}",
    players: "Players",
    seat: "Seat {0}",
    shroud: "Shroud",
    storyteller: "Storyteller {0}",
    storytellers: "the Storytellers",
    token: "Token",
    townsfolk: "Townsfolk|Townsfolk",
    traveller: "Traveller|Travellers"
}
  , a = JSON.parse(`{"announcement":{"description":"What do you want to announce?","error":"Error Sending Announcement","input_session":"Session name (optional)","input_text":"Your announcement text","input_title":"Announcement title","title":"Make an announcement"},"dialogue":{"button_evil":"Evil won","button_good":"Good won","button_no":"No","button_yes":"Yes","close_timer":"This pop-up will close itself in {n}s.","error":{"add_player":"Can't add player","add_storyteller":"Error adding Storyteller","avatar":"Error uploading avatar","avatar_generic":"Something went wrong when trying to upload your avatar.","avatar_pixel":"Your image was too big. Please scale it down to less than 4000x4000 before uploading it again.","avatar_size":"Your file was too large. Please try again with an image of less than 5 MB file size.","avatar_type":"Your file was not recognized as an image.","bluffs":"Error updating bluffs","chat2_text":"The chat server seems to be offline","chat2_title":"Chat Server Disconnected","chat_text":"Connection lost to the chat server, trying to reconnect...\\nError message: {0}","chat_title":"A chat connection error happened","claiming":"Error claiming seat","clear_grim":"Can't clear grimoire","create_generic":"The server was unable to create your session.","create_rate_limit":"You have to wait a few minutes before you can create another session.","create_session_exists":"A session with this name already exists.","connection":"A connection error happened","edition_change":"Error changing edition","end":"Error ending game","eyes_close":"Unable to close eyes","eyes_open":"Unable to open eyes","generic":"An error happened","kick":"Unable to kick user","link_text":"There was an error linking your account to Patreon. Please try again.","link_title":"Error linking account to Patreon","loading_text":"Something went wrong when trying to load the app data. The page will reload.","loading_title":"Error loading app data","missing_edition":"This session contains an edition that can't be found.","missing_edition_title":"Error loading edition","missing_roles":"This session contains custom characters that can't be found. Please load them before joining! Missing roles: {0}","missing_roles_title":"Error loading custom roles","move_player":"Can't move player","npcs":"Error updating NPCs","offline":"The server seems to be offline","remove_player":"Can't remove player","remove_storyteller":"Error removing Storyteller","request_grim":"Unable to request grimoire","running":"Error changing running state","sending_roles":"Error sending roles","server2_text":"Connection lost to the game server, trying to reconnect...\\nError message: {0}","server_change":"Unable to change chat server","server_text":"The connection timed out while waiting for the game server.","server_title":"Game Server Disconnected","session":"Error creating game session","session_banned":"You are banned.","session_full":"This session already has 25 users.","session_general":"Error when connecting to session.","session_locked":"The game session has been locked.\\nOnly seated Players and Storytellers may join.","session_not_found":"Game session not found.","session_public":"You cannot join public game sessions.","session_rejoin":"You cannot rejoin this game session yet.","session_subscription":"You need a subscription to join this game session.","session_unverified":"You need to verify your account before you can join public game sessions.","signal":"Error sending night signal","start":"Error starting game","subscription":"Subscription required","subscription_text":"You need a subscription to join this game session.","subscription_title":"No Patreon subscription found","theme_change":"Error changing theme","unauthorized":"Unauthorized","update":"Error updating game","update_game":"Unable to update session data","update_player":"Error updating player","update_storyteller":"Error updating Storyteller","user_not_found":"User not found.","user_text":"Something went wrong: {0}","user_title":"Error updating user","vacating":"Error vacating seat","video_text":"Your browser prevented the app from auto-playing video chat, please close this message to start the chat.","video_title":"Error initiating video chat"},"prompt":{"chat_text":"The app has problems reaching the chat server {0}, would you like to switch to {1}?","chat_title":"Switch Chat Server","join_placeholder":"Session ID","join_text":"Please enter the number or name of the game session you want to join","join_title":"Join a game","leave_text":"Are you sure you want to leave the current game and return to the Lobby?","leave_text_player":"Are you sure you want to vacate your seat and return to the Lobby?","leave_title":"Return to Lobby","pronouns_placeholder":"Pronouns","pronouns_text":"Please enter your Pronouns:","pronouns_title":"Enter your Pronouns","storyteller_text":"Do you want to become a Storyteller and see the Grimoire?","storyteller_title":"Storyteller Promotion Request","terms":"Updated Terms of Service","username_placeholder":"Username","username_text":"Please enter your Username:","username_title":"Enter your Username"},"terms":"By using Blood on the Clocktower Online, you acknowledge that you have read and agree to the following terms & policies:","terms_confirm":"I confirm that I have read and agree to these terms and policies.","timer_paused":"Paused during Nominations & Votes","timer_start":"Start","timer_title":"Timer title (optional)","unit_minutes":"minutes","unit_seconds":"seconds"},"edition":{"button_clear":"Clear Grimoire","button_paste":"Paste","button_upload":"Upload","button_url":"URL","clear_description":"This will clear the Grimoire and Reminder tokens for you and everyone else. Are you sure?","clear_title":"Clear Grimoire and Reminder Tokens","custom_placeholder":"Custom Script URL","custom_text":"Enter URL to a custom-script.json file","custom_title":"Load Custom Script","difficulty":"Difficulty:","difficulty_beginner":"Beginner","difficulty_intermediate":"Intermediate","difficulty_various":"Various","error_character":"Too many characters","error_character_text":"This script contains more than 200 characters - please remove some of them.","error_custom":"Error loading custom script","error_loading":"Some characters could not be loaded: {0}","error_script":"Script is not valid","error_script_text":"This script was loaded but contains some problems. This usually means there are some lines that should not be there, according to the official Custom Script JSON schema.","error_size":"File size too big","error_size_text":"The script you selected has a size of {0}MB, but the maximum size is {1}MB.","homebrew_description":"Custom images from Homebrew scripts have been replaced with generic icons for security reasons. You can enable them through the Settings menu.","homebrew_title":"Custom Images Disabled","release_script":"{role} Character Release Script:","theme":"Theme:","theme_generic":"Generic theme:","title":"Select an edition:","upload_custom":"Upload Custom Script JSON"},"help":{"button_send":"Send Session Debug Data","button_stop":"Stop Sending Debug Data","link_0":"issue tracker","link_1":"via email","link_2":"here","link_3":"our online store","session_debug":"Are you encountering any errors? You can send information about your session and recent history to our bug tracker, which will help us identify problems you're having:","session_debug2":"Your app session is being tracked now and will be automatically sent to us. You can always stop this tracking manually by clicking the button below or reloading the app.","text1":"This app (version {version}) is currently Under Construction.","text2":"You can submit feedback through the {0} page or {1}. You can update your account email address and password {2}. If you want to buy the physical game, take a look at {3}.","welcome":"Welcome to {0}!"},"npc":{"title":"Add a Non-Player Character"},"reminder":{"custom_favorite":"Saved as favorite","custom_note":"Custom note","custom_text":"Enter a custom reminder note to add to {0}","custom_title":"Add Custom Reminder","tab1":"Relevant Reminders","tab2":"Other Reminders","title":"Add Reminder Token to {0}"},"role":{"error_character":"No character matching {0} found.","error_traveller":"No traveller matching {0} found.","tab_character":"Available Characters","tab_traveller":"Other Travellers","title":"Select a {alignment} {type} {target}","title_alignment_e":"Evil","title_alignment_g":"Good","title_alignment_r":"regular","title_type_bluff":"bluff","title_type_character":"character","title_target":"for {0}"},"roles":{"button_distribute":"Pass out {0} characters","button_gardener":"Assign {0} characters","button_shuffle":"Shuffle","button_sort":"Sort","clear":"Clear selected characters","title":"Select the characters for {0}","title_players":"players","warning":"Warning: there are characters selected that modify the game setup! You need to account for these yourself."},"rules":{"title":"Rules"},"settings":{"background_placeholder":"URL to background image","background_text":"Please enter a custom background URL, or leave it blank to remove a custom background.","background_title":"Custom Background","button_always":"Always","button_edit":"Edit Account","button_setup":"Run the Setup","button_verify":"Verify Account","css_apply":"Apply Custom CSS Rules?","css_confirm":"I know what I'm doing, let me change the look of my app","css_confirm2":"Please confirm that you want to keep the Custom CSS changes. Otherwise, they will be disabled automatically.","css_text":"You can modify your app appearance here by entering a URL to a Custom CSS file or the CSS code itself. The Pandemonium Institute is not responsible for CSS code provided by other users. Loading malicious CSS code might break your app!","css_title":"Enter Custom CSS","image_text":"Are you sure you want to allow custom images? A malicious script file author might track your IP address this way. The Pandemonium Institute has no control over the images being provided by other users of the app.","image_title":"Allow custom images","nomination":{"focus":{"text":"The nominated player has the group's attention.","title":"Nominee focus"},"regular":{"text":"Everyone may talk as they wish.","title":"Regular"},"phases":{"text":"Only the nominator and nominee may talk.","title":"Accusation & defense"},"bigwig":{"text":"Each nominee chooses a player: until voting, only they may speak & they are mad the nominee is good or they might die.","title":"Big Wig"}},"option_disabled":"Disabled","patreon_link":"Link Patreon Account","patreon_perks":"Avatar upload and special nameplates are available with a paid {0}!","patreon_perks2":"Patreon subscription","patreon_update":"Update Patreon Status","setting_alignment":"Show Alignment on Town Square","setting_animations":"Show Animations","setting_audio_deafen":"Listen To Voice Chat","setting_audio_unnamed":"Unnamed audio input","setting_auto_gain":"Auto Gain Control","setting_avatar_size":"Player Avatar Size","setting_avatars":"Show Avatars / Cams on Town Square","setting_background":"Background Image","setting_camera":"Camera","setting_chroma":"Chroma Key","setting_chroma_label":"Select Chroma Color","setting_clouds":"Show Night Phase Clouds","setting_colorblind":"Colorblind Mode: {0}","setting_condense":"Condense Character Sheets","setting_cosmetics":"Show Player Cosmetics","setting_css":"Custom CSS Rules","setting_css_label":"Enter Custom CSS Rules","setting_echo_cancellation":"Echo Cancellation","setting_english":"Show Additional English Character Names","setting_gain":"Audio Gain","setting_general_volume":"General volume","setting_grimoire_offset":"Grimoire Offset","setting_homebrew":"Show Custom Images / Homebrew Icons","setting_microphone":"Microphone","setting_mute_audio":"Mute Audio","setting_mute_video":"Hide Video","setting_noise_suppression":"Noise Suppression","setting_player_bluffs":"Player: Show Bluffs Tab","setting_player_night":"Player: Show Night Order Sheets","setting_player_reminders":"Player: Allow duplicate reminder tokens","setting_player_sound":"Player: Play Chat request sound effects at night","setting_positioning":"Allow Side Tabs Moving","setting_private_cams":"Show Cams of Players in Private Chats","setting_ptt":"Push To Talk","setting_reminder_zoom":"Reminder Token Size","setting_reminders":"Stack Reminder Tokens","setting_reminders_always":"Always","setting_reminders_auto":"Auto","setting_reminders_never":"Never","setting_reveal":"Show Cameras During Grimoire Reveal","setting_st_night":"Storyteller: Show Waking Order","setting_st_nomination":"Storyteller: Nomination Type","setting_st_vote":"Storyteller: Vote Time","setting_st_whisper":"Storyteller: Allow Text Whispers","setting_tutorial":"Show App Tutorial Steps","setting_video_deafen":"Show Camera Feeds","setting_video_hidden":"Hide Your Own Camera","setting_video_mirrored":"Mirror Your Own Camera","setting_video_unnamed":"Unnamed video input","setting_volume":"Sound Effects Volume","setting_zoom":"Player Token Size","setup":"Microphone or Camera problems?","shortcut_add":"Add Button","shortcut_escape":"Press Escape to reset the shortcut","shortcut_record":"Press the key you want to assign to {0}","shortcut_reset":"Reset All Shortcuts","shortcut_reset_confirm":"Do you want to reset all shortcuts? This is irreversible.","shortcut_touch":"Touch Support (Swipe, etc.)","shortcut_touch_text":"Support for touch gestures such as swipe up / down","shortcuts":{"acceptChat1":"Accept Chat Request 1","acceptChat2":"Accept Chat Request 2","acceptChat3":"Accept Chat Request 3","attentionGong":"Recall / Attention Gong","castVote":"Cast Vote / Mark Player","leaveChat":"Leave a Chat","leaveSession":"Leave a Session","modalRules":"Read the Rules","modalSettings":"Settings","modalShortcuts":"Shortcuts","modalUsers":"Users","modeGather":"Gather Your Players","raiseHand":"Raise Hand","revealGrimoire":"Reveal Grimoire","setTimer":"Set Timer","toggleAudioDeafened":"Deafen Voice Chat","toggleAudioMuted":"Mute Mic / Push-to-Talk","toggleEdition":"Select Edition","toggleFullscreen":"Fullscreen","toggleNPCs":"Add Non-Player Character","toggleNight":"Toggle Night Phase","toggleNightOrder":"Night Order","toggleNightSignal":"Show Night Info","toggleReference":"Character Reference","toggleRoles":"Select Characters","toggleTownSquare":"Show Town Square","toggleVideoMuted":"Toggle Camera","toggleVoteHistory":"Vote History","toggleWhisper":"Chat / Text Message"},"sounds":{"attentionGong":"Attention gong","chatJoin":"Public chat enter","chatLeave":"Public chat exit","countdown":"Countdown","privateJoin":"Private chat enter","privateRequest":"Private chat request","timerGong":"Timer end gong","voteCast":"Vote cast","voteTick":"Vote clock tick","voteTickShort":"Vote clock tick (<1s)"},"tab_advanced":"Advanced","tab_chat":"Chat","tab_game":"Game","tab_general":"General","tab_shortcuts":"Shortcuts","tab_user":"User","title":"App Settings","title_avatar":"Select an Avatar","title_sound":"Sound Effects Volume"},"setup":{"audio_devices":"Audio Devices","audio_error":"Unable to get audio stream","audio_unnamed":"Unnamed Audio Device","browser":"Browser:","button_rerun":"Rerun","button_start":"Start","cam_blocked":"Access to camera is blocked","cam_query":"Querying for camera permissions","capture_audio":"Capture audio","capture_video":"Capture video","get_devices":"Get list of devices","mic_blocked":"Access to microphone is blocked","mic_cam_blocked":"Unable to access camera and microphone","mic_cam_query":"Access camera and microphone","mic_only":"Access microphone only","mic_query":"Querying for microphone permissions","no_devices":"No suitable devices found","self_listen":"Listen to yourself","start":"Start","step":"Step {0}:","text":"This setup will try to access your webcam and microphone when you press {0}. If there are any errors, it will display them below each step.","title":"Set up Microphone and Camera","video_devices":"Video Devices","video_error":"Unable to get video stream","video_unnamed":"Unnamed video device"},"signal":{"bluffs":"Bluffs:","cards":{"ability":"Use your ability?","acknowledge":"Got it","anticlockwise":"Anticlockwise","bluffs":"These characters are not in play","choice":"Make a choice","claim":"This player is","clockwise":"Clockwise","demon":"This is the Demon","evil":"Evil","five":"Five","four":"Four","good":"Good","minions":"These are your Minions","neutral":"Neutral","no":"No","one":"One","selected":"This character selected you","three":"Three","two":"Two","yes":"Yes","you":"You are","zero":"Zero"},"character":"Character","custom":"Custom","grimoire":"The Grimoire","message":"Message:","player":"Player","player_text":"Select a player by clicking on their token in the Grimoire.","prompt_custom_placeholder":"Custom message","prompt_custom_player":"What do you want to ask the Storyteller?","prompt_custom_st":"What do you want to tell the player?","prompt_custom_title":"Send custom message","received":"Received","response":"Response:","saw_this":"{0} saw this","select_everyone":"Select everyone","selected_players":"Selected players","sent":"Sent","storyteller":"Storyteller|Storytellers","title":"Wake {0}","title_character":"Select a character","title_player":"Select a player","title_spec":"The Storyteller woke {0}:","title_st":"The Storyteller woke you:","warning_dead":"This player is dead.","warning_droison":"This player is drunk / poisoned.","warning_vortox":"Townsfolk abilities yield false information."},"update":{"bugfix":"Bug Fixes","feature":"New Features","general":"General Changes","other":"Other Changes","title":"New Updates:"},"user":{"button_add_st":"Add Storyteller","button_cancel_st":"Cancel Storyteller Request","button_kick_user":"Kick User","button_mod_user":"Mod User","button_remove_st":"Remove Storyteller","error":"There was an error loading the user details.","grimoire_access_grant":"Grant Grimoire Access","grimoire_access_revoke":"Revoke Grimoire Access","loading":"Loading user...","prompt_kick":"Do you really want to remove {0} from the game session?","prompt_st":"Do you really want to make {0} a Storyteller?\\nAfter they confirm this request, they will have full Storyteller powers and access to the Grimoire.","title":"User profile"},"users":{"chat_connection":"Chat connection type","grim_access":"Grimoire Access","group_sub":"Group Subscriber","new_user":"New User","official_mod":"Official Moderator","official_tpi":"Official TPI","offline":"Offline","st_requested":"Storyteller Requested","type_player":"Player|{n} Players","type_spectator":"Spectator|{n} Spectators","type_storyteller":"Storyteller|{n} Storytellers"},"verification":{"button_reset":"Reset","code":"Code","code_sent":"A code has been sent to your phone number, please enter it to verify your account!","country_code":"Country Code","error_402":"Disposable phone numbers can't be used for account verification.","error_403":"This phone number is already being used by a different user. If you think this is incorrect, please contact us at {0}.","error_404":"The verification attempt has expired or is invalid. Please try again.","error_assigned":"This phone number is already assigned to another user, please use a different phone number.","error_cooldown":"You have reached the maximum number of attempts. Please wait at least {0} minutes before trying again.","error_other":"Something went wrong: {0}. Please try again.","error_pending":"Incorrect code. Please try again.","error_restart":"You have reached the maximum number of attempts. Please enter your phone number again.","phone":"Phone Number","success":"Verification successful! You can close this window now.","text_body":"We’re introducing SMS verification for accounts that join {0} to help protect the vibrant, respectful community that makes Blood on the Clocktower special. While most players already contribute to a fantastic culture, this step helps us take quick and appropriate action when the game experience is disrupted. Private games are unaffected.","text_body2":"public games","text_footer":"Phone numbers are stored in a non-recoverable way.","text_title":"Why is this needed?","title":"Account Verification"},"votehistory":{"clear":"Clear vote history","execution":"Execution","exile":"Exile","majority":"Majority","nominator":"Nominator","nominee":"Nominee","phase":"Phase","pregame":"Pregame","title":"Vote history","type":"Type","voters":"Voters","votes":"Votes"}}`)
  , i = {
    attention: {
        attention: "Attention please!",
        return: "Please return to the Town Square now!"
    },
    firstnight: {
        bluffs: 'Select the 3 blank "Demon Bluff" tokens to share with the Demon.',
        button_begin: "Begin First Night Phase",
        gardener_button: "Send the Characters",
        gardener_text: "When you're happy with the character setup, {0} to your Players. Once you have handed them out, you can proceed with setting up the First Night.",
        reminders: "Add any necessary {0} reminder tokens.",
        title: "Prepare First Night"
    },
    gatherplayers: {
        button_add: "Add Seat",
        button_clear: "Clear Empty",
        button_clearall: "Clear All",
        button_select: "Select an Edition",
        button_shuffle: "Shuffle Seats",
        clear_text: "Are you sure you want to remove all players?",
        clear_title: "Remove all players",
        move: `Move after
{0}`,
        shuffle_text: "Are you sure you want to randomize seatings?",
        shuffle_title: "Randomize seatings",
        swap: `Swap with
{0}`,
        text: "Add, shuffle or remove player seats here.",
        text2: "When there are enough seats for everyone, {0}",
        title: "Gather Your Players",
        warning: "You need at least 7 players for a regular game in Ravenswood Bluff."
    },
    nightaction: {
        "open-eyes": {
            button_close: "Close",
            button_open: "Open",
            button_peek: "Peek",
            state_false: "Closed",
            "state_open-eyes": "Open",
            "state_peek-eyes": "Peeking",
            text: "Your eyes are {0}",
            tooltip_false: "You won't see any other player's night signal and you won't be able to send private text messages to anyone but your neighbours and the Storyteller.",
            "tooltip_open-eyes": "You are able to send and receive private text messages to and from all other players, no matter where they sit. You will see the content of every night signal being sent and received, however there's a chance someone else will catch you.",
            "tooltip_peek-eyes": "You are able to send and receive private text messages to and from all other players, no matter where they sit. You will see who is sending and receiving night signals, but not the content of those signals. You can't be caught doing that."
        }
    },
    pointing: {
        button_countdown: "Countdown",
        countdown_freeze: "Freeze",
        nobody: "nobody",
        prompt: "Click on a player to point at them!",
        title_locked: "Chosen player:|Chosen players:",
        title_open: "Current selection:|Current selection:",
        you_pointed: "You pointed at:"
    },
    reveal: {
        button_remaining: "Remaining players",
        button_result: "Game result",
        evil: "Evil",
        good: "Good",
        prompt: `Warning: This will end the game and reveal the Grimoire to all players!
Who won the game?`,
        result: "{0} has won!",
        text: "Reveal the game result and each player by clicking on their token. You can mouse over the token to peek at their character.",
        title: "Reveal Grimoire"
    },
    rules: {
        button_select: "Select the Characters",
        text: "You're ready to {0}",
        text2: "Travellers should be assigned to players before selecting characters.",
        title: "Select Characters"
    },
    towninfo: {
        alive: "Alive",
        button_gather: "Gather Your Players",
        return: "Return to Grimoire (Shortcut: {0})",
        script_by: "by {0}",
        text_player: "The Storyteller needs to add more players before you can begin.",
        text_st: "To begin, you first need to {0}",
        timer_ended: "ended",
        title: "Welcome to {0}."
    },
    vote: {
        accusation: "Accusation",
        button_chat: "Open Chat",
        button_clear_selection: "Clear Selection",
        button_countdown: "Countdown",
        button_defense: "Go to Defense",
        button_hand_down: "DOWN",
        button_hand_up: "UP",
        button_mark: "Mark",
        button_mark_remove: "Remove Mark",
        button_pause: "Pause",
        button_reset: "Reset",
        button_restart: "Restart",
        button_resume: "Resume",
        button_select_player: "Select Player",
        button_set_highscore: "Set Highscore",
        button_start: "Start",
        choose_defense_attorney: "Choose a defense attorney!",
        countdown_go: "Go",
        defense: "Defense",
        defense_attorney: "Defense attorney",
        highscore_placeholder: "highest vote tally",
        highscore_text: `Enter a new number for today's vote highscore
or leave empty for the regular living player majority.`,
        highscore_title: "Change Vote Highscore",
        majority: "Majority is {0} vote|Majority is {0} votes",
        no_majority: "No majority needed",
        pointing: "Pointing at {0}",
        secret: "The vote will be secret.",
        secret_vote: "Secret Vote",
        votes: "{0} vote to tie, {1} to execute|{0} votes to tie, {1} to execute",
        warning_shortcuts: "Shortcuts are disabled!"
    },
    whisper: {
        muted: "This player is muted / silenced in the voice chat.",
        video_muted: "This player has their camera paused / disabled."
    }
}
  , n = {
    banned: {
        description: "Your account has been {0} due to your recent actions and can no longer be used to play on the app.",
        description_banned: "banned",
        expires: "Your account has been banned until:",
        expires2: "Please refrain from repeat offenses, or you may receive a permanent ban.",
        footer1: "If you need assistance, please reach out to us via {0}.",
        footer2: "Remember:",
        footer3: "Kill with grace and die with dignity.",
        permanent: "Your account has been banned permanently.",
        reason: "The following reason has been provided:",
        title: "Account Banned"
    },
    clock: {
        description: "Your computer clock is currently off by {0}. This can cause the app to malfunction during online play. You can synchronize your computer clock {1}. Once it is synchronized, reload the app.",
        description_mins: "1 minute|{n} minutes",
        description_online: "online",
        return: "Return to the App",
        title: "Please adjust your computer clock"
    },
    lobby: {
        bootlegger_title: "Heads up!",
        bootlegger_warning: `This session is using the Bootlegger Loric, which means it has customised rules or characters outside of the official release, and is better suited for experienced players.
If you're new to Blood on the Clocktower, we recommend getting used to the standard rules and characters first, with one of the official base scripts. Trouble Brewing is perfect for the best first-game experience!
In any case, welcome — we're glad you're here!
Are you sure you want to join this session?`,
        button_create_game: "Create Game",
        button_help: "Help",
        button_join_game: "Join Private Game",
        button_local_play: "Local Play",
        button_mod: "Mod",
        button_quit: "Quit",
        button_settings: "Settings",
        button_verify: "Verify Account",
        characters: "Characters",
        create_game: "Create New Game",
        edition_by: "by {author}",
        forced_private: "You can no longer play in public games.",
        free_tier_free: "Free",
        free_tier_patreon: "Patreon",
        free_tier_unverified: "You have a {0} account. You can play in any of the games above by clicking on the button on the left, unless they require a subscription. If you want to host your own games, get a subscription on {1}.",
        free_tier_verified: "You have a {0} account. You need to {1} before you can play in public games. If you want to host your own games, get a subscription on {2}.",
        free_tier_verify: "verify your account",
        game: "Game",
        language: "Language",
        loading: "Loading games...",
        no_games: "No public games found.",
        npcs: "Non-Player Characters",
        page: "Page {page} of {total}",
        phase: "Phase",
        players: "Players",
        script: "Script",
        show_private: "Show private games",
        spectators: "Spectators",
        stats: "{0} users are in {1} {2} games",
        stats_public: "public",
        storyteller: "Storyteller",
        subscription: "Subscription level",
        updating: "Updating...",
        welcome: "Welcome to {0}!"
    },
    login: {
        accept: "Accept our {0}, {1} & {2}.",
        description: "Please log in or create an account to continue:",
        email: "E-Mail Address",
        error_captcha: "Please complete the captcha",
        error_password: "Passwords don't match",
        login: "Login",
        password: "Password",
        password_confirm: "Password Confirmation",
        password_reset: "Instructions to reset your password have been sent to the associated email address.",
        recover_password: "Recover Password",
        register: "Register",
        subscribe: "Subscribe to Mailing List",
        title: "Welcome to Blood on the Clocktower Online - Under Construction!",
        username: "Username"
    },
    update: {
        description: "You are currently using version {0}, but the latest version is {1}.",
        download: "Download the latest {label} version here.",
        reload: "Please reload the page or clear your browser cache to update.",
        title: "Please update your App"
    },
    verification: {
        button_resend: "Resend code",
        code: "6-digit code",
        description: "Please verify your account to continue. We've sent a code to your email address - enter it to proceed. Can't access that email address?",
        email_success: "Email sent successfully.",
        error_429: "Please wait at least {0} seconds before trying again.",
        error_disposable: "Disposable email addresses can't be used for account verification.",
        error_verified: "Already verified",
        error_wrong: "Incorrect code, please try again.",
        link: "You can change it here."
    }
}
  , s = {
    menu: {
        alignment: "Change Alignment",
        character: "Change Character",
        chat: "Request Private Chat",
        empty: "Empty Seat",
        empty_text: "Do you really want to remove this player from their seat while the game is running?",
        empty_title: "Empty Seat of {0}",
        follow: "Follow Player",
        nominate: "Nominate Self",
        unfollow: "Unfollow Player",
        wake: "Wake",
        whisper: "Send Text Message"
    },
    name: {
        claim: "Click to claim",
        connecting: "This player is connecting to the voice chat.",
        follow: "You're following this player.",
        listening: "This player is listening in the voice chat.",
        move: "Move this player.",
        offline: "This player is currently offline.",
        remove: "Remove this player.",
        remove_text: `Do you really want to remove Seat {0}?
It is currently occupied by {1}.`,
        remove_title: "Remove Seat",
        seat_text: "(this will only be visible to you)",
        seat_title: "Change Seat Name"
    },
    overlay: {
        eyes_open: "Has their eyes open",
        night_info_received: "Night info received",
        night_info_sent: "Night info sent",
        nominate: "Nominate this player",
        point: "Point at this player",
        select: "Select this player"
    },
    reminders: {
        add: "Add Reminder",
        edit: "Edit Reminder {0}",
        edit_placeholder: "Custom note",
        edit_text: "Edit the custom reminder note for {0}",
        edit_title: "Edit Reminder",
        flip: "Flip Reminder {0}",
        remove: "Remove Reminder {0}",
        saved_favorite: "Saved as favorite"
    },
    shroud_add: "This shroud is not visible to the players. Click again during the day to make it visible.",
    shroud_remove: "This shroud is still visible to the players. Click again during the day to remove it.",
    toggle_status: "Toggle Status"
}
  , l = {
    access: "Access",
    copy: "Click to copy",
    created: "Created {0} ago by {1}.",
    free: "Free for everyone",
    language: "Chat Language",
    locked: "STs and Players",
    locked_text: "Only seated players and current Storytellers can join the session.",
    name_placeholder: "Game session name",
    open_text: "Everyone can join the session.",
    prompt_public_text: `Are you sure you want to make the game session visible to the public?
This will allow anyone to see and join your game.`,
    prompt_public_title: "Make Game Session Public",
    server: "Chat Server:",
    server_name: "Name",
    server_stats: "{0} users, {1} server load",
    session_name: "Session Name",
    subscription_needed: "Subscription needed",
    tags: "Public Game tags",
    title_create: "Create game session",
    title_current: "Current game session",
    visibility: "Visibility",
    visibility_private: "Private",
    visibility_public: "Public"
}
  , c = {
    connecting: "The storyteller is connecting to the voice chat.",
    follow: "Follow Storyteller",
    following: "You're following this storyteller.",
    listening: "The storyteller is listening in the voice chat.",
    offline: "The storyteller is currently offline.",
    prompt_grim_text: `New users can't request Grimoire Access in public games.
Please complete more games to unlock this feature.`,
    prompt_grim_title: "Error Requesting Grimoire Access",
    remove: "Remove Storyteller",
    request_grim: "Request Grimoire Access",
    title: "Storytellers",
    unfollow: "Unfollow Storyteller"
}
  , u = {
    bluffs: {
        title: "Bluffs"
    },
    character: {
        download: "Download Script JSON",
        error_popout: "Error creating window",
        error_save: "Error saving file",
        jinxes: "Jinxes",
        other_nights: `Not the
first night`,
        popout: "Pop-out Character Tab"
    },
    characters: {
        title: "Characters"
    },
    chat: {
        accept: "Accept Request",
        accept_request: "Accept chat request with {0}",
        cancel: "Cancel Request",
        cancel_request: "Cancel chat request with {0}",
        channels: {
            bmr_0: "Tavern",
            bmr_1: "Hut",
            bmr_2: "Swamp",
            bmr_3: "Farmhouse",
            bmr_4: "Caravan",
            custom_0: "Potion Shop",
            custom_1: "Tower",
            custom_2: "Cathedral",
            custom_3: "Campfire",
            custom_4: "Riverside",
            snv_0: "Herb Garden",
            snv_1: "Greenhouse",
            snv_2: "Caverns",
            snv_3: "Temple",
            snv_4: "Circus Tent",
            tb_0: "Monastery",
            tb_1: "Church",
            tb_2: "Graveyard",
            tb_3: "Library",
            tb_4: "Laboratory"
        },
        chats: "Chats",
        following: "You're following this player.",
        incoming: "Incoming",
        leave_private: "Leave Private Chat",
        leave_room: "Leave room",
        night: "Night has fallen...",
        nomination: "A player has been nominated!",
        outgoing: "Outgoing",
        request_private: "Request Private Chat",
        requests: "Chat Requests",
        reset_position: "Reset position",
        spectator: "Spectator",
        title: "Voice"
    },
    night: {
        toggle: "Toggle night phase sheet",
        popout: "Pop out night phase sheet"
    },
    npcs: {
        remove_fabled: "Remove Fabled",
        remove_loric: "Remove Loric",
        title: "NPCs"
    },
    text: {
        channels: {
            private: "Private",
            public: "Public",
            spectator: "Spectators",
            system: "Session"
        },
        message_blocked: "not delivered",
        message_to: "to",
        prompt_private: "Private chat",
        prompt_public: "Public announcement",
        prompt_spectator: "Spectator chat",
        prompt_system: "System messages",
        prompt_user: "To {0}",
        system: {
            death: "{0} has died.",
            end_evil: "The game has ended and the Evil team has won!",
            end_good: "The game has ended and the Good team has won!",
            grim_deny: "{0} has been denied Grimoire access.",
            grim_receive: "{0} has received Grimoire access.",
            grim_remove: "{0} no longer has Grimoire access.",
            grim_request: "{0} has requested Grimoire access.",
            join: "{0} joined the game.",
            leave: "{0} left the game.",
            phase: "{0} has begun.",
            revive: "{0} has been revived.",
            seat_claim: "{0} has taken seat {1}.",
            seat_empty: "{0} has been removed from seat {1}.",
            seat_vacate: "{0} has left seat {1}.",
            signal: "{0} sent a night signal to {1}.",
            start: "The game has begun and characters have been sent out!",
            storyteller_add: "{0} became the Storyteller.",
            storyteller_remove: "{0} stopped being the Storyteller.",
            vote: "{0} has used their Ghost Vote."
        },
        title: "Text",
        tooltip: "Show {0} unread messages with recipient {1}"
    }
}
  , h = {
    avatar_enabled: "Avatar visible",
    camera_enabled: "Camera visible",
    error_avatar_text: "The avatar you selected has a size of {0}MB, but the maximum size is {1}MB.",
    error_avatar_title: "File size too big",
    gain: "Gain",
    group_subscription: "Group Subscription",
    id: "User ID",
    level: "Account Level",
    mic_volume: "Mic Volume",
    new_user: "New User",
    pronouns: "pronouns",
    registration: "Registration",
    statistics: "Statistics",
    stats: {
        edition: `Top Played
Editions`,
        homebrew: "A Homebrew Character",
        loading: "Loading statistics...",
        none: "None",
        player: `Games
Played`,
        player_wins: "{0}% Winrate",
        role: `Top Starting
Characters`,
        st_evil_wins: "{0}% Evil Winrate",
        storyteller: `Games
Storytold`,
        warning: `Statistics are being generated...
Check back later!`
    },
    stats_hidden: "Hidden",
    stats_private: "Private",
    stats_public: "Public",
    upload_avatar: "Upload Avatar",
    verified: "Verified User"
}
  , d = {
    character_distribution: "Character distribution",
    download: "Please download and install the latest {0} version here.",
    players_alive: "{0} / {1} players alive",
    reload: "Please reload or clear your browser cache to get the latest version.",
    since: "since {0}",
    translation_disclaimer: "You're currently using a localized version of the app. This translation has been created and reviewed by the following volunteers, who are not affiliated with The Pandemonium Institute:",
    translation_game: "This game content translation might not accurately reflect the official English game rules as written by The Pandemonium Institute.",
    update: "Please Update!",
    updating: "Updating app to version {0}...",
    warning_browser: "You are using an old or unsupported browser",
    warning_browser2: "{0}, which might cause issues with the app. Please download the latest browser updates or switch to a different browser. The app works best in Firefox and Chrome.",
    warning_update: "Your app version is outdated",
    warning_update2: "{0}, the latest version is {1}!"
}
  , m = {
    common: o,
    grimoire: r,
    "main-menu": {
        cast_vote: "Cast Vote",
        change_icon: "Click to change icon",
        char_sheet: "Character Sheet",
        characters: "Select Characters",
        clear_grim: "Clear Grimoire",
        download: "Download {0} App",
        edition: "Select Edition",
        error_audio: "Your browser prevented the app from {0}. Please click here to start the chat.",
        error_audio2: "auto-playing voice chat",
        error_audio3: "You might also have to {0} in Firefox to hear audio from the app.",
        error_audio4: "change a setting",
        fullscreen: "Fullscreen",
        gather: "Gather Your Players",
        gong_attention: "Attention Gong",
        gong_recall: "Recall to Town Square",
        grim_access: "You have been given access to the Grimoire",
        grim_request: "A spectator has requested Grimoire access",
        help: "Help",
        json_schema: "Script JSON Schema",
        leave: "Leave Game",
        mute_cam: "Disable your camera [{0}]",
        mute_mic: "Mute your microphone [{0}]",
        night_info: "Night info",
        night_info_text: "The Storyteller woke you this night!",
        night_sheet: "Night Order Sheet",
        npcs: "Add NPCs",
        prompt_clear_player: "Are you sure you want to remove all player characters and reminder tokens?",
        prompt_clear_st: "This will clear the Grimoire and Reminder tokens for you and everyone else. Are you sure?",
        prompt_clear_title: "Clear Grimoire and Reminder Tokens",
        prompt_timer_text: "Choose a duration and (optional) title for the timer:",
        prompt_timer_title: "Set a timer",
        prompt_vacate_text: "You are currently in an active game, are you sure you want to leave your seat?",
        prompt_vacate_title: "Vacate Seat",
        push_to_talk: "Press [{0}] to speak",
        raise_hand: "Raise Hand",
        request_private: "Request Private Chat",
        reveal_grim: "Reveal Grimoire",
        rules: "Read The Rules",
        session_expires: "There is currently no Minion tier user in this session and it might expire at {0}.",
        set_timer: "Set Timer",
        settings: "Settings",
        show_grim: "Show Grimoire",
        show_town: "Show Town Square",
        show_users: "Show Users [{0}]",
        storyteller_add: "Become the Storyteller",
        storyteller_remove: "Step down as Storyteller",
        tab_app: "App",
        tab_during_game: "During Game",
        tab_new_game: "New Game",
        tab_playing: "Playing",
        to_day: "Go to Day Phase",
        to_night: "Go to Night Phase",
        translation: "Improve this translation",
        user_list: "User List",
        vacate_seat: "Vacate Seat",
        vote_history: "Vote History"
    },
    modals: a,
    overlays: i,
    pages: n,
    player: s,
    session: l,
    storyteller: c,
    tabs: u,
    user: h,
    version: d
};
export {o as common, m as default, r as grimoire, a as modals, i as overlays, n as pages, s as player, l as session, c as storyteller, u as tabs, h as user, d as version};
//# sourceMappingURL=en-BCgckO2U.js.map
