ActiveAdmin.register Book do


  #編集画面に表示したい項目をここに並べる
  form do |f|
    f.inputs "Details" do
      f.input :title
    end
    f.buttons
  end
end
