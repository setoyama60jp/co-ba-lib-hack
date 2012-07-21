class AddNameAndFacebookIdToCobaUser < ActiveRecord::Migration
  def change
    add_column :coba_users, :name, :string

    add_column :coba_users, :facebook_id, :string

  end
end
