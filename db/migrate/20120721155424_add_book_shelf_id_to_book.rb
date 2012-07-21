class AddBookShelfIdToBook < ActiveRecord::Migration
  def change
    add_column :books, :book_shelf_id, :integer

  end
end
