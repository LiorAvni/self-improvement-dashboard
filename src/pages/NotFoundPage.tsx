import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function NotFoundPage() {
  return (
    <Card>
      <h1 className="text-2xl font-bold text-main">Page not found</h1>
      <p className="mt-2 text-muted">This route does not exist.</p>
      <Link to="/"><Button className="mt-4">Back to dashboard</Button></Link>
    </Card>
  );
}
