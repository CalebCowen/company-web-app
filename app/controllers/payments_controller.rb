class PaymentsController < ApplicationController

  def create
    project = Project.find_by(name: params[:project_name].downcase)
    amount = (params[:amount].to_f * 100).to_i
    token = params[:stripeToken]
    charge = Stripe::Charge.create(
    :amount => amount,
    :currency => "usd",
    :description => "Payment for #{params[:project_name]}",
    :source => token
    )
    project.payments.create(amount: amount)
    project.update_attributes(amount_owed: project.amount_owed - amount)

    rescue Stripe::CardError => e
      body = e.json_body
      error = body[:error]
      DeclineMailer.decline_email(project, error).deliver_now
  end
end
