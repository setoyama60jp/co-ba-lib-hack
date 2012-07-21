class CreateBookShelves < ActiveRecord::Migration
  def change
    create_table :book_shelves do |t|
      t.string :address
      t.integer :coba_user
      t.string :photo_url
      t.text :introduction

      t.timestamps
    end
  end
end
