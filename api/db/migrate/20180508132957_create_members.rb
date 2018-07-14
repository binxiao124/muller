class CreateMembers < ActiveRecord::Migration[5.1]
  def change
    create_table :members do |t|
      t.string :name
      t.string :position
      t.string :description

      t.timestamps
    end
  end
end
