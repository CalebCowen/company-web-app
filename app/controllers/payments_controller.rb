class PaymentsController < ApplicationController

  def new
    @payment = Payment.new
  end

  def create
    project = Project.find_by(name: params[:payment][:project].downcase)
    if project
      payment = project.payments.create(payment_params)
      flash[:success] = "Payment succcesful"
    else
      flash[:error] = "There is no project with that name"
      redirect_to new_payment_path
    end
  end

  private
    def payment_params
      params.require(:payment).permit(:amount)
    end
end
