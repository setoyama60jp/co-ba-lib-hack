class RenameCobaUserToBookShelvs < ActiveRecord::Migration
  def up
    rename_column :book_shelves, :coba_user, :coba_user_id
  end

  def down
    rename_column :book_shelves, :coba_user_id, :coba_user
  end
end
