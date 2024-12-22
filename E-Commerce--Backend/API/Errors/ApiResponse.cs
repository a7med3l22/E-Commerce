
using Microsoft.AspNetCore.Http;

namespace API.Errors
{
	public class ApiResponse
	{
		public ApiResponse(int statuscode, string message = null)
		{
			Statuscode = statuscode;
			Message = message??GetDefaultMessageForStatusCode(statuscode);
		}

		private static string GetDefaultMessageForStatusCode(int statusCode)
		{
			return statusCode switch
			{
				400 => "A bad request, you have made.",
				401 => "Authorized, you are not.",
				404 => "Resource found, it was not.",
				500 => "An internal server error occurred.",
				_ => null
			};
		}

		public int Statuscode { get; }
		public string Message { get; }
	}
	
}
