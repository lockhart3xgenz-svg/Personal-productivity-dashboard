function ToggleDarkMode ({darkMode,
     setDarkMode}){

          return(
          <div className="form-check 
          form-switch mb-3">
               <input className="form-check-input"
                      type="checkbox"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                      id="darkModeSwitch"
               />
               <label className="form-check-label" 
               htmlFor="darkModeSwitch"
               >Dark Mode
               </label>
          </div>
          )}

          export default ToggleDarkMode;