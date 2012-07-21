class AddBookShelfPositionToBookShelf < ActiveRecord::Migration
  def change
    add_column :book_shelves, :book_shelf_position, :string

  end
end
