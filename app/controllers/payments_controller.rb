class PaymentsController < ApplicationController

  def create
    amount = (params[:amount].to_f * 100).to_i
    project = Project.find_by(name: params[:project_name].downcase)
    project.payments.create(amount: amount)
    project.update_attributes(amount_owed: project.amount_owed - amount)
    token = params[:stripeToken]

    charge = Stripe::Charge.create(
    :amount => amount,
    :currency => "usd",
    :description => "Payment for #{params[:project_name]}",
    :source => token
    )
  end
end
