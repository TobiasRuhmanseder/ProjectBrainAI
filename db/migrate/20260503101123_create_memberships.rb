class CreateMemberships < ActiveRecord::Migration[8.1]
  def change
    create_table :memberships do |t|
      t.references :user,     null: false, foreign_key: true
      t.references :company,  null: false, foreign_key: true
      t.string :role,         null: false, default: "user"

      t.timestamps
    end

    add_index :memberships, [ :user_id, :company_id ], unique: true
    execute <<~SQL
       CREATE UNIQUE INDEX index_memberships_one_owner_per_company
        ON memberships (company_id)#{'                                                                       '}
        WHERE role = 'owner';#{'                                                                             '}
      SQL
  end
end
