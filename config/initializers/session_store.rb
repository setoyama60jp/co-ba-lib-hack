# Be sure to restart your server when you modify this file.

#CoBaLibHack::Application.config.session_store :cookie_store, key: '_co-ba-lib-hack_session'

require 'action_dispatch/middleware/session/dalli_store'
CoBaLibHack::Application.config.session_store :dalli_store

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rails generate session_migration")
# CoBaLibHack::Application.config.session_store :active_record_store
