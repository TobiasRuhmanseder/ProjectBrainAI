class ApplicationController < ActionController::Base
  include Authentication
  allow_browser versions: :modern
  before_action :set_current_company

    inertia_share do
      { flash: flash.to_h }
    end

    private

    def current_company
    @current_company ||= Current.user&.memberships
                                &.find_by(company_id: session[:current_company_id])
                                &.company ||
                         Current.user&.memberships&.first&.company
    end
    def set_current_company
      Current.company = current_company
    end
end
