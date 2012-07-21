# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120721060107) do

  create_table "book_shelves", :force => true do |t|
    t.string   "address"
    t.integer  "coba_user_id"
    t.string   "photo_url"
    t.text     "introduction"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "books", :force => true do |t|
    t.string   "booklog_id"
    t.string   "asin"
    t.string   "booklog_url"
    t.string   "title"
    t.string   "author"
    t.string   "image_url"
    t.integer  "image_width"
    t.integer  "image_height"
    t.string   "category"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

end
