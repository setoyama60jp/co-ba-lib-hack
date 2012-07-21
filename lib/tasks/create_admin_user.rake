desc "create_admin_user task"

#rake create_admin_user active_admin_email="test@test.com" active_admin_password="password"  のように実行して下さい。
task :create_admin_user => :environment do

  puts ENV["active_admin_email"]
  puts ENV["active_admin_password"]

  email = ENV["active_admin_email"].dup
  password = ENV["active_admin_password"].dup

  newAdminUser = AdminUser.new({:email => email,
                                :password => password,
                                :password_confirmation => password})
  newAdminUser.save
  puts "admin_user created."
end

