class BookShelf < ActiveRecord::Base
  belongs_to :coba_user
  has_many :books
end
