class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :booklog_id
      t.string :asin
      t.string :booklog_url
      t.string :title
      t.string :author
      t.string :image_url
      t.integer :image_width
      t.integer :image_height
      t.string :category

      t.timestamps
    end
  end
end
