class BookShelfController < ApplicationController

  def show_north_shelf

  end

  def show_south_shelf

  end


  def show_west_shelf

  end

  def show_east_shelf

  end

  def show_shelf_detail
    @target_book_shelf = BookShelf.find_by_id(params[:book_shelf_id])
  end

end
