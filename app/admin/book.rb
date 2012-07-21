ActiveAdmin.register Book do


  #編集画面に表示したい項目をここに並べる
  form do |f|
    f.inputs "Details" do
      f.input :booklog_id
      f.input :asin
      f.input :booklog_url
      f.input :title
      f.input :author
      f.input :image_url
      f.input :image_width
      f.input :image_height
      f.input :category
      f.input :book_shelf_id
    end
    f.buttons
  end
end
