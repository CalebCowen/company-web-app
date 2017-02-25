class PaymentsController < ApplicationController

  def create
    amount = (params[:amount].to_f * 100).to_i
    project = Project.find_by(name: params[:project_name].downcase)
    if project && project.amount_owed >= amount
      project.payments.create(amount: amount)
      project.update_attributes(amount_owed: project.amount_owed - amount)
      token = params[:stripeToken]

      charge = Stripe::Charge.create(
      :amount => amount,
      :currency => "usd",
      :description => "Payment for #{params[:project_name]}",
      :source => token
      )

      flash.now[:success] = "Payment succcesful"
    elsif !project
      flash.now[:error] = "There is no project with that name"
    elsif project.amount_owed < amount
      flash.now[:error] = "That payment amount is more than you owe!"
    end

  end
end
