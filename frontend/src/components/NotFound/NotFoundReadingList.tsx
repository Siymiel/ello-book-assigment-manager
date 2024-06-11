import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface NotFoundProps {
  icon?: React.ElementType<any>;
  title: string;
  subtitle?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  margin: 'auto',
  marginTop: theme.spacing(8),
  backgroundColor: '#FFE6DC',
}));

const CenteredContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const NotFoundReadingList: React.FC<NotFoundProps> = ({ icon: Icon, title, subtitle }) => {
  return (
    <StyledCard>
      <CardContent>
        <CenteredContent>
          {Icon && <Icon style={{ fontSize: 100, marginBottom: 16 }} />}
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body1">
              {subtitle}
            </Typography>
          )}
        </CenteredContent>
      </CardContent>
    </StyledCard>
  );
};

export default NotFoundReadingList;
