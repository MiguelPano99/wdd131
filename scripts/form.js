
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('reviewForm');
            const currentYearSpan = document.getElementById('currentYear');
            const lastModifiedSpan = document.getElementById('lastModified');

            if (currentYearSpan) {
                currentYearSpan.textContent = new Date().getFullYear();
            }

            if (lastModifiedSpan) {
                const date = new Date(document.lastModified);
                const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
                lastModifiedSpan.textContent = date.toLocaleDateString('en-US', options);
            }

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                const formData = new FormData(form);
                const data = {};
                
                for (let [key, value] of formData.entries()) {
                    if (key === 'features') {
                        if (!data[key]) {
                            data[key] = [];
                        }
                        data[key].push(value);
                    } else {
                        data[key] = value;
                    }
                }

                const rating = formData.get('overallRating') || 'Not rated';
                
                let usefulFeatures = [];
                formData.getAll('features').forEach(feature => usefulFeatures.push(feature));

                const reviewDetails = {
                    product: data.productName,
                    rating: rating,
                    installDate: data.installDate,
                    usefulFeatures: usefulFeatures.length > 0 ? usefulFeatures.join(', ') : 'None selected',
                    writtenReview: data.writtenReview || 'N/A',
                    name: data.yourName || 'Anonymous'
                };

                const messageBox = document.createElement('div');
                messageBox.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 25px; border: 3px solid var(--primary-blue); border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.5); z-index: 1000; max-width: 90%;';
                messageBox.innerHTML = `
                    <h4 style="margin-top: 0; color: var(--primary-blue);">Review Submitted!</h4>
                    <p style="margin-bottom: 5px;"><strong>Product:</strong> ${reviewDetails.product}</p>
                    <p style="margin-bottom: 5px;"><strong>Rating:</strong> ${reviewDetails.rating} Star(s)</p>
                    <p style="margin-bottom: 5px;"><strong>Features:</strong> ${reviewDetails.usefulFeatures}</p>
                    <p style="margin-bottom: 5px;"><strong>Name:</strong> ${reviewDetails.name}</p>
                    <p style="margin-bottom: 20px;">Review content logged to console.</p>
                    <button onclick="this.parentNode.remove()" style="width: auto; padding: 10px 20px; font-size: 1em;">Close</button>
                `;

                document.body.appendChild(messageBox);
                
                console.log('--- Product Review Submission ---');
                console.log(reviewDetails);
                
                form.reset();
            });
        });
