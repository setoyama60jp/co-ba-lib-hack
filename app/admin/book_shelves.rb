ActiveAdmin.register BookShelf do
  index do
      column :id do |book_shelf|
        link_to book_shelf.id.to_s, resource_path(book_shelf)
      end
      column :address
      column :photo_url
      column :user do |book_shelf|
        book_shelf.try(:coba_user).try(:name)
      end
      column :introduction
      column :book_shelf_position

      default_actions
    end
end
