class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :description
      t.string :image
      t.string :city
      t.string :prefecture
      t.text :tipOne
      t.text :tipTwo
      t.text :tipThree

      t.timestamps
    end
  end
end
